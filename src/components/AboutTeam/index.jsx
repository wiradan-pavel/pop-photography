import { motion } from 'framer-motion';
import { Container, Wrapper } from '../elements';
import { aboutTeam } from '../../data/about.data';
import { lineYellow388Dec } from '../../data/decoration.img';
import {
  opacityItemAni,
  opacityStaggerChildren03Ani,
  opacityXNegative100ItemAni,
} from '../../data/animations.var';

import style from './style.module.scss';

export default function AboutTeam() {
  return (
    <Wrapper>
      <Container>
        <motion.section
          variants={opacityStaggerChildren03Ani}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={style.section}
        >
          <motion.h2 variants={opacityXNegative100ItemAni} className={style.title}>
            {aboutTeam.title}
            <img src={lineYellow388Dec} alt="" />
          </motion.h2>
          <motion.p variants={opacityXNegative100ItemAni} className={style.text}>
            {aboutTeam.text}
          </motion.p>
          <div className={style.list}>
            {aboutTeam.cards.map((item) => (
              <motion.div variants={opacityItemAni} className={style.list__item} key={item.id}>
                <div className={style.list__item__img}>
                  <img src={item.imgUrl} alt="" />
                </div>
                <p className={style.list__item__name}>{item.name}</p>
                <p className={style.list__item__who}>{item.who}</p>
                <p className={style.list__item__desc}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </Container>
    </Wrapper>
  );
}
