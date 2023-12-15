import { serviceKidsTransform } from '../../data/serviceKids.data';
import { lineYellow416Dec } from '../../data/decoration.img';
import beforeAfterImg from '../../assets/icons/before-after.svg';

import style from './style.module.scss';

export default function ServiceKidsTransform() {
  return (
    <div className={style.wrapperWhite}>
      <div className={style.container}>
        <section className={style.section}>
          <h4 className={style.title}>
            {serviceKidsTransform.title}
            <img src={lineYellow416Dec} alt="" />
          </h4>
          <div className={style.content}>
            <div className={style.content__before}>
              <img src={serviceKidsTransform.imgUrlBefore} alt="" />
            </div>
            <div className={style.content__after}>
              <img src={serviceKidsTransform.imgUrlAfter} alt="" />
            </div>
            <img className={style.content__arrow} src={beforeAfterImg} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
}
