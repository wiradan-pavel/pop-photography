import { dotsWhite18Dec, spiralWhiteDec } from '../../../data/decoration.img';
import style from './style.module.scss';

export default function SectionBanner({ children, isStyleOne }) {
  return (
    <div className={isStyleOne ? style.wrapper__style1 : style.wrapper__style2}>
      <div className={style.container}>
        <section className={style.section}>{children}</section>
      </div>

      <img className={style.img__spiral} src={spiralWhiteDec} alt="" />
      {isStyleOne && <img className={style.img__dots} src={dotsWhite18Dec} alt="" />}
    </div>
  );
}
