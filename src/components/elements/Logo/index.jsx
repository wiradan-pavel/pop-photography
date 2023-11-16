import { Link } from 'react-router-dom';
import style from './style.module.scss';
import { header } from '../../../data';

export default function Logo({ top }) {
  return (
    <div className={style.div}>
      <Link to={'/'}>
        <img
          className={top ? style.img__header : style.img__footer}
          src={header[2].imgUrl}
          alt={header[2].name}
        />
      </Link>
    </div>
  );
}
