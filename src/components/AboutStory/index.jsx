import { motion } from 'framer-motion';
import { Container, Wrapper } from '../elements';
import { aboutStory } from '../../data/about.data';
import { lineYellow388Dec } from '../../data/decoration.img';
import { normalListAni, upDownItemAni } from '../../data/animations.var';

import style from './style.module.scss';

export default function AboutStory() {
  return (
    <Wrapper>
      <Container>
        <section className={style.section}>
          <h2 className={style.title}>
            {aboutStory.title}
            <img src={lineYellow388Dec} alt="" />
          </h2>
          <motion.div
            variants={normalListAni}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={style.list}
          >
            {aboutStory.cards.map((item) => (
              <motion.div variants={upDownItemAni} className={style.list__item} key={item.id}>
                <div className={style.list__item__img}>
                  <img src={item.imgUrl} alt="" />
                </div>
                <h5 className={style.list__item__title}>{item.title}</h5>
                <p className={style.list__item__text}>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </Container>
    </Wrapper>
  );
}
