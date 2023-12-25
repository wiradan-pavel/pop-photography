import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { opacityItemAni } from '../../../data/animations.var';

import style from './style.module.scss';

export default function ArticleItem({ id, headerImg, authorImg, author, date, title, text }) {
  return (
    <motion.div variants={opacityItemAni} className={style.item}>
      <div className={style.item__img}>
        <img src={headerImg} alt="" />
      </div>
      <div className={style.content}>
        <div className={style.item__author}>
          <div className={style.item__author__img}>
            <img src={authorImg} alt="" />
          </div>
          <p className={style.item__author__name}>{author}</p>
          <p className={style.item__author__date}>{date}</p>
        </div>
        <div className={style.item__content}>
          <h6 className={style.item__title}>{title}</h6>
          <p className={style.item__text}>{text[0]}</p>
          <div className={style.item__btn}>
            <Link className={style.item__btn} to={`/blog/${id}`}>
              READ MORE
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
