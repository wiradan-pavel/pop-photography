import { motion } from 'framer-motion';
import { Container, Wrapper } from '../elements';
import { features } from '../../data/features.data';
import { bulbYellowDec, lineYellow298Dec } from '../../data/decoration.img';
import { normalListAni, scaleItemAni } from '../../data/animations.var';

import style from './style.module.scss';

export default function Features() {
  return (
    <Wrapper>
      <Container>
        <section>
          <div className={style.title__wrap}>
            <h2 className={style.title}>
              {features.title}
              <img className={style.title__bulb} src={bulbYellowDec} alt="" />
              <img className={style.title__line} src={lineYellow298Dec} alt="" />
            </h2>
          </div>
          <motion.div
            variants={normalListAni}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={style.list}
          >
            {features.cards.map((item) => (
              <motion.div variants={scaleItemAni} className={style.list__item} key={item.id}>
                <div className={style.list__item__img}>
                  <img src={item.imgUrl} alt="photo" />
                </div>
                <p className={style.list__item__p}>{item.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </Container>
    </Wrapper>
  );
}
