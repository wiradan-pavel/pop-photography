import { DivPhoto } from '../elements';
import { serviceKidsUnlock } from '../../data/serviceKids.data';
import { lineYellow416Dec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function ServiceKidsUnlock() {
  return (
    <div className={style.wrapperWhite}>
      <div className={style.container}>
        <section className={style.section}>
          <DivPhoto imgUrl={serviceKidsUnlock.imgUrl} />
          <div className={style.content}>
            <h4 className={style.title}>
              {serviceKidsUnlock.title}
              <img src={lineYellow416Dec} alt="" />
            </h4>
            <p>{serviceKidsUnlock.text1}</p>
            <p>{serviceKidsUnlock.text2}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
