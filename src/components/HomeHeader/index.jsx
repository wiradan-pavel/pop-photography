import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Container, Wrapper } from '../elements';
import { homeHeader } from '../../data/home.data';
import { homeHeaderBtn } from '../../data/buttons.data';
import {
  homeHeaderBackground1Dec,
  homeHeaderBackground2Dec,
  waveWhiteDec,
  cameraWhiteDec,
  dotsWhite72Dec,
  spiralYellowDec,
  lineYellow119Dec,
} from '../../data/decoration.img';
import {
  opacityStaggerChildren05Ani,
  opacityDelayChildren05StaggerChildren007Ani,
  opacityDelayChildren1StaggerChildren05Ani,
  opacityXNegative100ItemAni,
  scaleItemAni,
  opacityItemAni,
  opacityDuration1Delay05Ani,
  opacityDuration1Delay3Ani,
  scaleDuration1Delay05Ani,
} from '../../data/animations.var';

import style from './style.module.scss';

export default function HomeHeader() {
  return (
    <Wrapper purple>
      <Container>
        <section className={style.div}>
          <motion.div
            variants={opacityStaggerChildren05Ani}
            initial="hidden"
            animate="show"
            className={style.div__left}
          >
            <motion.h1 variants={opacityXNegative100ItemAni} className={style.div__left__title}>
              {homeHeader.title}
              <img src={lineYellow119Dec} alt="" />
            </motion.h1>
            <motion.p variants={opacityXNegative100ItemAni} className={style.div__left__text}>
              {homeHeader.text}
            </motion.p>
            <motion.div variants={opacityXNegative100ItemAni}>
              <Button>
                <Link to={homeHeaderBtn.link}>{homeHeaderBtn.text}</Link>
              </Button>
            </motion.div>
          </motion.div>
          <div className={style.div__right}>
            <div className={style.div__right__imgs}>
              <div className={style.div__right__imgs__back}>
                <img src={homeHeaderBackground1Dec} alt="" />
                <img src={homeHeaderBackground2Dec} alt="" />
              </div>
              <motion.div
                variants={opacityDelayChildren05StaggerChildren007Ani}
                initial="hidden"
                animate="show"
                className={style.div__right__imgs__front}
              >
                {homeHeader.imgUrls.map((imgUrl, index) => (
                  <motion.img
                    variants={scaleItemAni}
                    key={index}
                    src={imgUrl}
                    alt={`frontImage${index}`}
                  />
                ))}
              </motion.div>
            </div>
            <div className={style.div__right__social}>
              <motion.div
                variants={opacityDuration1Delay05Ani}
                initial="hidden"
                animate="show"
                className={style.div__right__social__line}
              ></motion.div>
              <motion.ul
                variants={opacityDelayChildren1StaggerChildren05Ani}
                initial="hidden"
                animate="show"
                className={style.div__right__social__list}
              >
                {homeHeader.socialLinks.map((item) => (
                  <motion.li variants={opacityItemAni} key={item.id}>
                    <Link to={item.link}>
                      <img src={item.imgUrl} alt={item.name} />
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                variants={opacityDuration1Delay3Ani}
                initial="hidden"
                animate="show"
                className={style.div__right__social__line}
              ></motion.div>
            </div>
          </div>
        </section>
        <motion.img
          variants={scaleDuration1Delay05Ani}
          initial="hidden"
          animate="show"
          className={style.camera}
          src={cameraWhiteDec}
          alt=""
        />
        <motion.img
          variants={scaleDuration1Delay05Ani}
          initial="hidden"
          animate="show"
          className={style.spiral}
          src={spiralYellowDec}
          alt=""
        />
      </Container>
      <motion.img
        variants={scaleDuration1Delay05Ani}
        initial="hidden"
        animate="show"
        className={style.wave}
        src={waveWhiteDec}
        alt=""
      />
      <motion.img
        variants={scaleDuration1Delay05Ani}
        initial="hidden"
        animate="show"
        className={style.dots}
        src={dotsWhite72Dec}
        alt=""
      />
    </Wrapper>
  );
}
