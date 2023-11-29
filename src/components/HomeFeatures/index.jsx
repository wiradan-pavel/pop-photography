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
  defaultListAnimation,
  opacityXNegative50ItemAnimation,
  quicklyListAnimation,
  scaleXPositive100ItemAnimation,
} from '../../data/animations.var';

import style from './style.module.scss';

export default function HomeFeatures() {
  return (
    <Wrapper>
      <Container>
        {/* why */}
        <section className={style.why}>
          <motion.div
            variants={defaultListAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={style.why__left}
          >
            <motion.h2
              variants={opacityXNegative50ItemAnimation}
              className={style.why__left__title}
            >
              {homeWhy.title1}
              <br /> {homeWhy.title2}
              <img className={style.why__left__title__line} src={lineYellow298Dec} alt="" />
            </motion.h2>
            <ol className={style.why__left__list}>
              {homeWhy.list.map((item) => (
                <motion.li variants={opacityXNegative50ItemAnimation} key={item.id}>
                  {item.text}
                </motion.li>
              ))}
            </ol>
            <motion.div variants={opacityXNegative50ItemAnimation}>
              <Button>
                <Link to={learnMoreBtn.link}>{learnMoreBtn.text}</Link>
              </Button>
            </motion.div>
            <motion.img
              variants={opacityXNegative50ItemAnimation}
              className={style.why__left__spiral}
              src={spiralBlackDec}
              alt=""
            />
          </motion.div>
          <motion.div
            variants={quicklyListAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={style.why__right}
          >
            <motion.img
              variants={scaleXPositive100ItemAnimation}
              className={style.why__right__photomain__left}
              src={homeWhy.imgUrls[0]}
              alt="photo"
            />
            <motion.img
              variants={scaleXPositive100ItemAnimation}
              className={style.why__right__photomain__right}
              src={homeWhy.imgUrls[1]}
              alt="photo"
            />
            <motion.img
              variants={scaleXPositive100ItemAnimation}
              className={style.why__right__photodec__dots}
              src={dotsBlack18Dec}
              alt=""
            />
            <motion.img
              variants={scaleXPositive100ItemAnimation}
              className={style.why__right__photodec__shape}
              src={homeWhyPurpleDec}
              alt=""
            />
          </motion.div>
        </section>
        {/* year */}
        <motion.section
          variants={quicklyListAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={style.year}
        >
          <div className={style.year__left}>
            <motion.img
              variants={scaleXPositive100ItemAnimation}
              src={homeYear.imgUrl}
              alt="photo"
            />
          </div>
          <div className={style.year__right}>
            <div className={style.year__right__ten}>
              <motion.p variants={scaleXPositive100ItemAnimation}>{homeYear.text1}</motion.p>
              <motion.img
                variants={scaleXPositive100ItemAnimation}
                className={style.year__right__ten__dots}
                src={dotsBlack18Dec}
                alt=""
              />
            </div>
            <div className={style.year__right__year}>
              <motion.p variants={scaleXPositive100ItemAnimation}>{homeYear.text2}</motion.p>
              <motion.img
                variants={scaleXPositive100ItemAnimation}
                className={style.year__right__year__dec}
                src={groupPeopleStarsDec}
                alt=""
              />
            </div>
            <div className={style.year__right__exp}>
              <motion.p variants={scaleXPositive100ItemAnimation}>{homeYear.text3}</motion.p>
            </div>
          </div>
          <motion.img
            variants={scaleXPositive100ItemAnimation}
            className={style.year__dec}
            src={circlePinkDec}
            alt=""
          />
        </motion.section>
      </Container>
    </Wrapper>
  );
}
