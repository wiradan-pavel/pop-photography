import { map } from '../../data/map.data';
import { lineYellow416Dec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function Map() {
  return (
    <section className={style.section}>
      <h4 className={style.title}>
        {map.title}
        <img src={lineYellow416Dec} alt="" />
      </h4>
      <div className={style.map}>
        <img src={map.mapImgUrl} alt="" />
      </div>
    </section>
  );
}
