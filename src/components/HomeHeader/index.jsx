import { Link } from 'react-router-dom';
import { Button, Container, Wrapper } from '../elements';
import { homeHeader } from '../../data/home.data';
import { homeHeaderBtn } from '../../data/buttons.data';
import {
  homeHeaderBackground1Dec,
  homeHeaderBackground2Dec,
  waveWhiteDec,
  cameraWhiteDec,
  dotsWhite72Dec,
  spiralYellowDec,
  lineYellow119Dec,
} from '../../data/decoration.data';

import style from './style.module.scss';

export default function HomeHeader() {
  return (
    <Wrapper purple>
      <Container>
        <section className={style.div}>
          <div
            className={style.div__left}
          >
            <h1 className={style.div__left__title}>
              {homeHeader.title}
              <img src={lineYellow119Dec} alt="" />
            </h1>
            <p className={style.div__left__text}>{homeHeader.text}</p>
            <Button>
              <Link to={homeHeaderBtn.link}>{homeHeaderBtn.text}</Link>
            </Button>
          </div>
          <div className={style.div__right}>
            <div className={style.div__right__imgs}>
              <div className={style.div__right__imgs__back}>
                <img src={homeHeaderBackground1Dec} alt="" />
                <img src={homeHeaderBackground2Dec} alt="" />
              </div>
              <div className={style.div__right__imgs__front}>
                {homeHeader.imgUrls.map((imgUrl, index) => (
                  <img key={index} src={imgUrl} alt={`frontImage${index}`} />
                ))}
              </div>
            </div>
            <div className={style.div__right__social}>
              <div className={style.div__right__social__line}></div>
              <ul className={style.div__right__social__list}>
                {homeHeader.socialLinks.map((item) => (
                  <li key={item.id}>
                    <Link to={item.link}>
                      <img src={item.imgUrl} alt={item.name} />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={style.div__right__social__line}></div>
            </div>
          </div>
        </section>
        <img className={style.camera} src={cameraWhiteDec} alt="" />
        <img className={style.spiral} src={spiralYellowDec} alt="" />
      </Container>
      <img className={style.wave} src={waveWhiteDec} alt="" />
      <img className={style.dots} src={dotsWhite72Dec} alt="" />
    </Wrapper>
  );
}
