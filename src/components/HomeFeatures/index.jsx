import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
} from '../../data/decoration.img';
import {
  normalListAni,
  scaleItemAni,
  opacityItemAni,
  leftRightItemAni,
} from '../../data/animations.var';

import style from './style.module.scss';

export default function HomeFeatures() {
  return (
    <Wrapper>
      <Container>
        {/* why */}
        <section className={style.why}>
          <motion.div
            variants={normalListAni}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={style.why__left}
          >
            <motion.h2 variants={leftRightItemAni} className={style.why__left__title}>
              {homeWhy.title1}
              <br /> {homeWhy.title2}
              <img className={style.why__left__title__line} src={lineYellow298Dec} alt="" />
            </motion.h2>
            <ol className={style.why__left__list}>
              {homeWhy.list.map((item) => (
                <motion.li variants={leftRightItemAni} key={item.id}>
                  {item.text}
                </motion.li>
              ))}
            </ol>
            <Button>
              <Link to={learnMoreBtn.link}>{learnMoreBtn.text}</Link>
            </Button>
            <motion.img
              variants={scaleItemAni}
              className={style.why__left__spiral}
              src={spiralBlackDec}
              alt=""
            />
          </motion.div>
          <motion.div
            variants={normalListAni}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={style.why__right}
          >
            <motion.img
              variants={opacityItemAni}
              className={style.why__right__photomain__left}
              src={homeWhy.imgUrls[0]}
              alt="photo"
            />
            <motion.img
              variants={opacityItemAni}
              className={style.why__right__photomain__right}
              src={homeWhy.imgUrls[1]}
              alt="photo"
            />
            <motion.img
              variants={opacityItemAni}
              className={style.why__right__photodec__dots}
              src={dotsBlack18Dec}
              alt=""
            />
            <motion.img
              variants={opacityItemAni}
              className={style.why__right__photodec__shape}
              src={homeWhyPurpleDec}
              alt=""
            />
          </motion.div>
        </section>
        {/* year */}
        <motion.section
          variants={normalListAni}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={style.year}
        >
          <div className={style.year__left}>
            <img src={homeYear.imgUrl} alt="photo" />
          </div>
          <div className={style.year__right}>
            <div className={style.year__right__ten}>
              <p>{homeYear.text1}</p>
              <motion.img
                variants={scaleItemAni}
                className={style.year__right__ten__dots}
                src={dotsBlack18Dec}
                alt=""
              />
            </div>
            <div className={style.year__right__year}>
              <p>{homeYear.text2}</p>
              <motion.img
                variants={scaleItemAni}
                className={style.year__right__year__dec}
                src={groupPeopleStarsDec}
                alt=""
              />
            </div>
            <div className={style.year__right__exp}>
              <p>{homeYear.text3}</p>
            </div>
          </div>
          <motion.img
            variants={scaleItemAni}
            className={style.year__dec}
            src={circlePinkDec}
            alt=""
          />
        </motion.section>
      </Container>
    </Wrapper>
  );
}
