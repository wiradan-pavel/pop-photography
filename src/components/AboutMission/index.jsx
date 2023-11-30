import { motion } from 'framer-motion';
import { Wrapper, Container } from '../elements';
import { aboutMission } from '../../data/about.data';
import { dotsBlack18Dec, homeWhyPurpleDec, lineYellow252Dec } from '../../data/decoration.img';
import {
  opacityDelayChildren05StaggerChildren02Ani,
  opacityXNegative100ItemAni,
  opacityYNegative50ItemAni,
} from '../../data/animations.var';

import style from './style.module.scss';

export default function AboutMission() {
  return (
    <Wrapper>
      <Container>
        <motion.section
          variants={opacityDelayChildren05StaggerChildren02Ani}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={style.section}
        >
          <div className={style.flex}>
            <div className={style.flex__left}>
              <motion.img
                variants={opacityYNegative50ItemAni}
                className={style.flex__left__imgLeft}
                src={aboutMission.imgLeftUrl}
                alt=""
              />
              <motion.img
                variants={opacityYNegative50ItemAni}
                className={style.flex__left__imgRight}
                src={aboutMission.imgRightUrl}
                alt=""
              />
              <motion.img
                variants={opacityYNegative50ItemAni}
                className={style.flex__left__imgDots}
                src={dotsBlack18Dec}
                alt=""
              />
              <motion.img
                variants={opacityYNegative50ItemAni}
                className={style.flex__left__imgShape}
                src={homeWhyPurpleDec}
                alt=""
              />
            </div>
            <div className={style.flex__right}>
              <motion.h2 variants={opacityXNegative100ItemAni} className={style.flex__right__title}>
                {aboutMission.title}
                <img src={lineYellow252Dec} alt="" />
              </motion.h2>
              <motion.p variants={opacityXNegative100ItemAni} className={style.flex__right__text}>
                {aboutMission.text}
              </motion.p>
            </div>
          </div>
        </motion.section>
      </Container>
    </Wrapper>
  );
}
