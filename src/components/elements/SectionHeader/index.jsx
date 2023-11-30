import { motion } from 'framer-motion';
import { Wrapper, Container } from '../index';
import { opacityStaggerChildren05Ani, scaleItemAni } from '../../../data/animations.var';
import {
  cameraWhiteDec,
  dotsWhite72Dec,
  spiralYellowDec,
  waveWhiteDec,
  dotsWhite18Dec,
} from '../../../data/decoration.img';

import style from './style.module.scss';

export default function SectionHeader({ imgUrl, children }) {
  return (
    <section>
      <Wrapper purple>
        <Container>
          <div className={style.section}>
            {children}
            <motion.div
              variants={opacityStaggerChildren05Ani}
              initial="hidden"
              animate="show"
              className={style.img}
            >
              <motion.img variants={scaleItemAni} src={imgUrl} alt="" />
              <motion.img
                variants={scaleItemAni}
                className={style.img__spiral}
                src={spiralYellowDec}
                alt=""
              />
              <motion.img
                variants={scaleItemAni}
                className={style.img__wave}
                src={waveWhiteDec}
                alt=""
              />
              <motion.img
                variants={scaleItemAni}
                className={style.img__dots18}
                src={dotsWhite18Dec}
                alt=""
              />
            </motion.div>
          </div>
        </Container>
        <img className={style.dec__camera} src={cameraWhiteDec} alt="" />
        <img className={style.dec__dots72} src={dotsWhite72Dec} alt="" />
      </Wrapper>
    </section>
  );
}
