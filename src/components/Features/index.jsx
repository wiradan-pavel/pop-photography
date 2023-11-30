import { motion } from 'framer-motion';
import { Container, Wrapper } from '../elements';
import { features } from '../../data/features.data';
import { bulbYellowDec, lineYellow298Dec } from '../../data/decoration.img';
import { opacityStaggerChildren03Ani, scaleItemAni } from '../../data/animations.var';

import style from './style.module.scss';

export default function Features() {
  return (
    <Wrapper>
      <Container>
        <motion.section
          variants={opacityStaggerChildren03Ani}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className={style.title__wrap}>
            <motion.h2 variants={scaleItemAni} className={style.title}>
              {features.title}
              <img className={style.title__bulb} src={bulbYellowDec} alt="" />
              <img className={style.title__line} src={lineYellow298Dec} alt="" />
            </motion.h2>
          </div>
          <div className={style.list}>
            {features.cards.map((item) => (
              <motion.div variants={scaleItemAni} className={style.list__item} key={item.id}>
                <div className={style.list__item__img}>
                  <img src={item.imgUrl} alt="photo" />
                </div>
                <p className={style.list__item__p}>{item.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </Container>
    </Wrapper>
  );
}
