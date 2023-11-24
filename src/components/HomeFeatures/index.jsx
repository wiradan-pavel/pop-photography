import { Link } from 'react-router-dom';
import { Button, Container, Wrapper } from '../elements';
import { homeWhy, homeYear } from '../../data/home.data';
import { learnMoreBtn } from '../../data/buttons.data';
import {
  circlePinkDec,
  dotsBlack18Dec,
  groupPeopleStarsDec,
  homeWhyPurpleDec,
  lineYellow298Dec,
  spiralBlackDec,
} from '../../data/decoration.data';

import style from './style.module.scss';

export default function HomeFeatures() {
  return (
    <Wrapper>
      <Container>
        {/* why */}
        <section className={style.why}>
          <div className={style.why__left}>
            <h2 className={style.why__left__title}>
              {homeWhy.title1}
              <br /> {homeWhy.title2}
              <img className={style.why__left__title__line} src={lineYellow298Dec} alt="" />
            </h2>
            <ol className={style.why__left__list}>
              {homeWhy.list.map((item) => (
                <li key={item.id}>{item.text}</li>
              ))}
            </ol>
            <Button>
              <Link to={learnMoreBtn.link}>{learnMoreBtn.text}</Link>
            </Button>
            <img className={style.why__left__spiral} src={spiralBlackDec} alt="" />
          </div>
          <div className={style.why__right}>
            <img
              className={style.why__right__photomain__left}
              src={homeWhy.imgUrls[0]}
              alt="photo"
            />
            <img
              className={style.why__right__photomain__right}
              src={homeWhy.imgUrls[1]}
              alt="photo"
            />
            <img className={style.why__right__photodec__dots} src={dotsBlack18Dec} alt="" />
            <img className={style.why__right__photodec__shape} src={homeWhyPurpleDec} alt="" />
          </div>
        </section>
        {/* year */}
        <section className={style.year}>
          <div className={style.year__left}>
            <img src={homeYear.imgUrl} alt="photo" />
          </div>
          <div className={style.year__right}>
            <div className={style.year__right__ten}>
              <p>{homeYear.text1}</p>
              <img className={style.year__right__ten__dots} src={dotsBlack18Dec} alt="" />
            </div>
            <div className={style.year__right__year}>
              <p>{homeYear.text2}</p>
              <img className={style.year__right__year__dec} src={groupPeopleStarsDec} alt="" />
            </div>
            <div className={style.year__right__exp}>
              <p>{homeYear.text3}</p>
            </div>
          </div>
          <img className={style.year__dec} src={circlePinkDec} alt="" />
        </section>
      </Container>
    </Wrapper>
  );
}
