import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { header } from '../../../data/header.data';
import { logoAni } from '../../../data/animations.var';

import style from './style.module.scss';

export default function Logo({ top }) {
  return (
    <motion.div
      variants={logoAni}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={style.div}
    >
      <Link to={header.logoUrl}>
        <img
          className={top ? style.img__header : style.img__footer}
          src={header.logoImgUrl}
          alt={header.logoName}
        />
      </Link>
    </motion.div>
  );
}
