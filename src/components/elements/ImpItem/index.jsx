import { motion } from 'framer-motion';
import { upDownItemAni } from '../../../data/animations.var';

import style from './style.module.scss';

export default function ImpItem({ imgUrl, title, text }) {
  return (
    <motion.div variants={upDownItemAni} className={style.item}>
      <div className={style.item__img}>
        <img src={imgUrl} alt="" />
      </div>
      <p className={style.item__title}>{title}</p>
      <p className={style.item__text}>{text}</p>
    </motion.div>
  );
}
