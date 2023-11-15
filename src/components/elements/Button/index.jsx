import style from './style.module.scss';

export default function Button({ children }) {
  return <button className={style.btn}>{children}</button>;
}
