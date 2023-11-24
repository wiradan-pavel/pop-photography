import { Link } from 'react-router-dom';
import { header } from '../../../data/header.data';

import style from './style.module.scss';

export default function Logo({ top }) {
  return (
    <div className={style.div}>
      <Link to={header.logoUrl}>
        <img
          className={top ? style.img__header : style.img__footer}
          src={header.logoImgUrl}
          alt={header.logoName}
        />
      </Link>
    </div>
  );
}
