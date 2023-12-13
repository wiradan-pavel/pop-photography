import { dotsBlack18Dec, homeWhyPurpleDec } from '../../../data/decoration.img';

import style from './style.module.scss';

export default function DivPhoto({ imgUrl }) {
  return (
    <div className={style.div}>
      <img className={style.div__img} src={imgUrl} alt="" />
      <img className={style.div__dots} src={dotsBlack18Dec} alt="" />
      <img className={style.div__figure} src={homeWhyPurpleDec} alt="" />
    </div>
  );
}
