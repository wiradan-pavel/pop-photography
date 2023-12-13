import { DivPhoto } from '../elements';
import { serviceTeenUnlock } from '../../data/serviceTeen.data';
import { lineYellow298Dec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function ServiceTeenUnlock() {
  return (
    <div className={style.wrapperWhite}>
      <div className={style.container}>
        <section className={style.section}>
          <DivPhoto imgUrl={serviceTeenUnlock.imgUrl} />
          <div className={style.content}>
            <h4 className={style.title}>
              {serviceTeenUnlock.title}
              <img src={lineYellow298Dec} alt="" />
            </h4>
            <p>{serviceTeenUnlock.text}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
