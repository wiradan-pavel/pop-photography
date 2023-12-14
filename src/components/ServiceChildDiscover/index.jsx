import { DivPhoto } from '../elements';
import { serviceChildDiscover } from '../../data/serviceChild.data';
import { lineYellow298Dec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function ServiceChildDiscover() {
  return (
    <div className={style.wrapperWhite}>
      <div className={style.container}>
        <section className={style.section}>
          <DivPhoto imgUrl={serviceChildDiscover.imgUrl} />
          <div className={style.content}>
            <h4 className={style.title}>
              {serviceChildDiscover.title}
              <img src={lineYellow298Dec} alt="" />
            </h4>
            <p>{serviceChildDiscover.text}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
