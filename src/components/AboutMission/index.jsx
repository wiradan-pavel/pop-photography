import { Wrapper, Container } from '../elements';
import { aboutMission } from '../../data/about.data';
import { dotsBlack18Dec, homeWhyPurpleDec, lineYellow252Dec } from '../../data/decoration.data';

import style from './style.module.scss';

export default function AboutMission() {
  return (
    <Wrapper>
      <Container>
        <section className={style.section}>
          <div className={style.flex}>
            <div className={style.flex__left}>
              <img className={style.flex__left__imgLeft} src={aboutMission.imgLeftUrl} alt="" />
              <img className={style.flex__left__imgRight} src={aboutMission.imgRightUrl} alt="" />
              <img className={style.flex__left__imgDots} src={dotsBlack18Dec} alt="" />
              <img className={style.flex__left__imgShape} src={homeWhyPurpleDec} alt="" />
            </div>
            <div className={style.flex__right}>
              <h2 className={style.flex__right__title}>
                {aboutMission.title}
                <img src={lineYellow252Dec} alt="" />
              </h2>
              <p className={style.flex__right__text}>{aboutMission.text}</p>
            </div>
          </div>
        </section>
      </Container>
    </Wrapper>
  );
}
