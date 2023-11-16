import style from './style.module.scss';

export default function Wrapper({ children, purple }) {
  return <div className={purple ? style.purple : style.white}>{children}</div>;
}
