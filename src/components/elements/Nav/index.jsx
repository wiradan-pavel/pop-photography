import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { header } from '../../../data/header.data';
import { headerNavAni, opacityYNegative50ItemAnimation } from '../../../data/animations.var';

import style from './style.module.scss';

export default function Nav() {
  return (
    <nav className={style.nav}>
      <motion.ul variants={headerNavAni} initial="hidden" animate="show" className={style.ul}>
        {/* map nav items */}
        {header.navLinks.map((item) => (
          <motion.li variants={opacityYNegative50ItemAnimation} className={style.li} key={item.id}>
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
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}
