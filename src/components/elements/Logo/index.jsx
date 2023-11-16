import { Link } from 'react-router-dom';
import style from './style.module.scss';
import logo from '../../../assets/icons/logo.svg';

export default function Logo({ header }) {
  return (
    <div className={style.div}>
      <Link to={'/'}>
        <img className={header ? style.img__header : style.img__footer} src={logo} alt="logo" />
      </Link>
    </div>
  );
}
