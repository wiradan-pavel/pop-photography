import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
} from '../../data/decoration.img';
import { scaleItemAni, quicklyListAni } from '../../data/animations.var';

import style from './style.module.scss';

export default function HomeHeader() {
  return (
    <div className={style.wrapperPurple}>
      <div className={style.container}>
        <section className={style.div}>
          <div className={style.div__left}>
            <h1 className={style.titleHeader}>
              {homeHeader.title}
              <img src={lineYellow119Dec} alt="" />
            </h1>
            <p className={style.div__left__text}>{homeHeader.text}</p>
            <div className={style.div__left__btn}>
              <button className={style.btn}>
                <Link to={homeHeaderBtn.link}>{homeHeaderBtn.text}</Link>
              </button>
            </div>
          </div>
          <div className={style.div__right}>
            <div className={style.div__right__imgs}>
              <div className={style.div__right__imgs__back}>
                <img src={homeHeaderBackground1Dec} alt="" />
                <img src={homeHeaderBackground2Dec} alt="" />
              </div>
              <motion.div
                variants={quicklyListAni}
                initial="hidden"
                animate="show"
                className={style.div__right__imgs__front}
              >
                {homeHeader.imgUrls.map((imgUrl, index) => (
                  <motion.img
                    variants={scaleItemAni}
                    key={index}
                    src={imgUrl}
                    alt={`frontImage${index}`}
                  />
                ))}
              </motion.div>
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
      </div>
      <img className={style.wave} src={waveWhiteDec} alt="" />
      <img className={style.dots} src={dotsWhite72Dec} alt="" />
    </div>
  );
}
