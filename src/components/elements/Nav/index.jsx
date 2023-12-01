import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { header } from '../../../data/header.data';
import { downUpItemAni, leftRightItemAni, quicklyListAni } from '../../../data/animations.var';

import style from './style.module.scss';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <ul className={style.ul}>
        {/* map nav items */}
        {header.navLinks.map((item) => (
          <li className={style.li} key={item.id}>
            <Link className={style.link} to={item.link}>
              {item.name}
              {item.name === 'Services' && <img src={header.arrow} alt="arrow" />}
            </Link>
            {item.name === 'Services' && (
              <ul className={style.ul__services}>
                {/* map service items */}
                {header.navLinkServices.map((item) => (
                  <li className={style.li__services} key={item.id}>
                    <Link className={style.link__services} to={item.link}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div onClick={() => setOpen(!open)} className={style.burger}>
        <div className={style.burger__line}></div>
        <div className={style.burger__line}></div>
        <div className={style.burger__line}></div>
      </div>
      {open && (
        <motion.div
          variants={downUpItemAni}
          initial="hidden"
          animate="show"
          onClick={() => setOpen(false)}
          className={style.burger__field}
        >
          <motion.ul
            variants={quicklyListAni}
            initial="hidden"
            animate="show"
            className={style.burger__ul}
          >
            {/* map nav items */}
            {header.navLinks.map((item) => (
              <motion.li variants={leftRightItemAni} className={style.burger__li} key={item.id}>
                <Link className={style.burger__link} to={item.link}>
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </nav>
  );
}
