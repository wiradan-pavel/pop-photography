import { DivPhoto } from '../elements';
import { aboutApproach } from '../../data/about.data';
import { lineYellow333Dec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function AboutApproach() {
  return (
    <div className={style.wrapperWhite}>
      <div className={style.container}>
        <section className={style.section}>
          <div className={style.div}>
            <div className={style.div__left}>
              <h4 className={style.title}>
                {aboutApproach.title1} <br />
                {aboutApproach.title2}
                <img src={lineYellow333Dec} alt="" />
              </h4>
              <p className={style.div__left__text}>{aboutApproach.text}</p>
            </div>
            <DivPhoto imgUrl={aboutApproach.imgUrl} />
          </div>
        </section>
      </div>
    </div>
  );
}
