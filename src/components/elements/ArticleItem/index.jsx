import { Link } from 'react-router-dom';
import style from './style.module.scss';

export default function ArticleItem({ headerImg, authorImg, author, date, title, text }) {
  return (
    <div className={style.item}>
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
        <h6 className={style.item__title}>{title}</h6>
        <p className={style.utem__text}>{text[0]}</p>
        <Link to="/">READ MORE</Link>
      </div>
    </div>
  );
}
