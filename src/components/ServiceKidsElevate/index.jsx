import { serviceKidsElevate } from '../../data/serviceKids.data';
import { dotsBlack18Dec, lineYellow252Dec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function ServiceKidsElevate() {
  return (
    <div className={style.wrapperWhite}>
      <div className={style.container}>
        <section className={style.section}>
          <div className={style.photos}>
            <img className={style.photos__left} src={serviceKidsElevate.imgUrlLeft} alt="" />
            <img className={style.photos__right} src={serviceKidsElevate.imgUrlRight} alt="" />
            <img className={style.photos__dots} src={dotsBlack18Dec} alt="" />
          </div>
          <div className={style.content}>
            <h4 className={style.title}>
              {serviceKidsElevate.title}
              <img src={lineYellow252Dec} alt="" />
            </h4>
            <p>{serviceKidsElevate.text1}</p>
            <p>{serviceKidsElevate.text2}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
