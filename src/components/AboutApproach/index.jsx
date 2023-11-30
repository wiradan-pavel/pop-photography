import { motion } from 'framer-motion';
import { Container, Wrapper } from '../elements';
import { aboutApproach } from '../../data/about.data';
import { dotsBlack18Dec, homeWhyPurpleDec, lineYellow333Dec } from '../../data/decoration.img';

import style from './style.module.scss';
import { opacityItemAni, opacityStaggerChildren05Ani } from '../../data/animations.var';

export default function AboutApproach() {
  return (
    <Wrapper>
      <Container>
        <section className={style.section}>
          <motion.div
            variants={opacityStaggerChildren05Ani}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={style.div}
          >
            <motion.div variants={opacityItemAni} className={style.div__left}>
              <h2 className={style.div__left__title}>
                {aboutApproach.title1} <br />
                {aboutApproach.title2}
                <img src={lineYellow333Dec} alt="" />
              </h2>
              <p className={style.div__left__text}>{aboutApproach.text}</p>
            </motion.div>
            <div className={style.div__right}>
              <motion.img
                variants={opacityItemAni}
                className={style.div__right__img}
                src={aboutApproach.imgUrl}
                alt=""
              />
              <motion.img
                variants={opacityItemAni}
                className={style.div__right__dots}
                src={dotsBlack18Dec}
                alt=""
              />
              <motion.img
                variants={opacityItemAni}
                className={style.div__right__figure}
                src={homeWhyPurpleDec}
                alt=""
              />
            </div>
          </motion.div>
        </section>
      </Container>
    </Wrapper>
  );
}
