import { motion } from 'framer-motion';
import {
  cameraWhiteDec,
  dotsWhite72Dec,
  spiralYellowDec,
  waveWhiteDec,
  dotsWhite18Dec,
} from '../../../data/decoration.img';
import { normalListAni, scaleItemAni } from '../../../data/animations.var';

import style from './style.module.scss';

export default function SectionHeader({ imgUrl, children }) {
  return (
    <div className={style.wrapperPurple}>
      <div className={style.container}>
        <section className={style.section}>
          {children}
          <motion.div
            variants={normalListAni}
            initial="hidden"
            animate="show"
            className={style.img}
          >
            <img className={style.img__main} src={imgUrl} alt="" />
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
        </section>
      </div>
      <img className={style.dec__camera} src={cameraWhiteDec} alt="" />
      <img className={style.dec__dots72} src={dotsWhite72Dec} alt="" />
    </div>
  );
}
