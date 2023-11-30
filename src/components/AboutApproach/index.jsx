import { Container, Wrapper } from '../elements';
import { aboutApproach } from '../../data/about.data';
import { dotsBlack18Dec, homeWhyPurpleDec, lineYellow333Dec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function AboutApproach() {
  return (
    <Wrapper>
      <Container>
        <section className={style.section}>
          <div className={style.div}>
            <div className={style.div__left}>
              <h2 className={style.div__left__title}>
                {aboutApproach.title1} <br />
                {aboutApproach.title2}
                <img src={lineYellow333Dec} alt="" />
              </h2>
              <p className={style.div__left__text}>{aboutApproach.text}</p>
            </div>
            <div className={style.div__right}>
              <img className={style.div__right__img} src={aboutApproach.imgUrl} alt="" />
              <img className={style.div__right__dots} src={dotsBlack18Dec} alt="" />
              <img className={style.div__right__figure} src={homeWhyPurpleDec} alt="" />
            </div>
          </div>
        </section>
      </Container>
    </Wrapper>
  );
}
