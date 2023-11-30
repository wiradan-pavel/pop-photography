import { motion } from 'framer-motion';
import { Container, Wrapper } from '../elements';
import { aboutStory } from '../../data/about.data';
import { lineYellow388Dec } from '../../data/decoration.img';

import style from './style.module.scss';
import {
  opacityDelayChildren05StaggerChildren05Ani,
  opacityItemAni,
} from '../../data/animations.var';

export default function AboutStory() {
  return (
    <Wrapper>
      <Container>
        <motion.section
          variants={opacityDelayChildren05StaggerChildren05Ani}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={style.section}
        >
          <motion.h2 variants={opacityItemAni} className={style.title}>
            {aboutStory.title}
            <img src={lineYellow388Dec} alt="" />
          </motion.h2>
          <div className={style.list}>
            {aboutStory.cards.map((item) => (
              <motion.div variants={opacityItemAni} className={style.list__item} key={item.id}>
                <div className={style.list__item__img}>
                  <img src={item.imgUrl} alt="" />
                </div>
                <h5 className={style.list__item__title}>{item.title}</h5>
                <p className={style.list__item__text}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </Container>
    </Wrapper>
  );
}
