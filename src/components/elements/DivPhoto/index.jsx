import { motion } from 'framer-motion';
import { dotsBlack18Dec, homeWhyPurpleDec } from '../../../data/decoration.img';
import { normalListAni, scaleItemAni } from '../../../data/animations.var';

import style from './style.module.scss';

export default function DivPhoto({ imgUrl }) {
  return (
    <motion.div
      variants={normalListAni}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={style.div}
    >
      <motion.img variants={scaleItemAni} className={style.div__img} src={imgUrl} alt="" />
      <motion.img variants={scaleItemAni} className={style.div__dots} src={dotsBlack18Dec} alt="" />
      <motion.img
        variants={scaleItemAni}
        className={style.div__figure}
        src={homeWhyPurpleDec}
        alt=""
      />
    </motion.div>
  );
}
