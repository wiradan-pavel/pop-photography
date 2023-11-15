import style from './style.module.scss';
import logo from '../../../assets/icons/logo.svg';

export default function Logo({ header }) {
  return (
    <div className={style.div}>
      <img className={header ? style.img__header : style.img__footer} src={logo} alt="logo" />
    </div>
  );
}
