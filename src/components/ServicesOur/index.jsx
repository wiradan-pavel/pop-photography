import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesOur } from '../../data/services.data';
import { learnMoreBtn } from '../../data/buttons.data';
import { lineYellow252Dec } from '../../data/decoration.img';
import { leftRightItemAni, normalListAni, upDownItemAni } from '../../data/animations.var';

import style from './style.module.scss';

export default function ServicesOur() {
  return (
    <div className={style.wrapper__white}>
      <div className={style.container}>
        <h4 className={style.title}>
          {servicesOur.title}
          <img src={lineYellow252Dec} alt="" />
        </h4>
        <div className={style.flex}>
          <div className={style.flex__left}>
            <img src={servicesOur.imgUrl} alt="" />
            <motion.div
              variants={normalListAni}
              initial="hidden"
              animate="show"
              className={style.flex__left__bottom}
            >
              <motion.p variants={leftRightItemAni}>{servicesOur.text}</motion.p>
              <motion.button variants={leftRightItemAni} className={style.btn}>
                <Link to={learnMoreBtn.link}>{learnMoreBtn.text}</Link>
              </motion.button>
            </motion.div>
          </div>
          <motion.div
            variants={normalListAni}
            initial="hidden"
            animate="show"
            className={style.flex__right}
          >
            {servicesOur.list.map((item) => (
              <motion.div
                variants={upDownItemAni}
                key={item.id}
                className={style.flex__right__item}
              >
                <Link to={item.link}>
                  <span>{item.num}</span>
                  {item.text}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
