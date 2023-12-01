import { motion } from 'framer-motion';
import { aboutMission } from '../../data/about.data';
import { dotsBlack18Dec, homeWhyPurpleDec, lineYellow252Dec } from '../../data/decoration.img';
import { leftRightItemAni, normalListAni } from '../../data/animations.var';

import style from './style.module.scss';

export default function AboutMission() {
  return (
    <div className={style.wrapperWhite}>
      <div className={style.container}>
        <section className={style.section}>
          <div className={style.flex}>
            <div className={style.flex__left}>
              <img className={style.flex__left__imgLeft} src={aboutMission.imgLeftUrl} alt="" />
              <img className={style.flex__left__imgRight} src={aboutMission.imgRightUrl} alt="" />
              <img className={style.flex__left__imgDots} src={dotsBlack18Dec} alt="" />
              <img className={style.flex__left__imgShape} src={homeWhyPurpleDec} alt="" />
            </div>
            <motion.div
              variants={normalListAni}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={style.flex__right}
            >
              <motion.h4 variants={leftRightItemAni} className={style.title}>
                {aboutMission.title}
                <img src={lineYellow252Dec} alt="" />
              </motion.h4>
              <motion.p variants={leftRightItemAni} className={style.flex__right__text}>
                {aboutMission.text}
              </motion.p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
