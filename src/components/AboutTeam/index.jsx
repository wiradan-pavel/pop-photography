import { motion } from 'framer-motion';
import { aboutTeam } from '../../data/about.data';
import { lineYellow388Dec } from '../../data/decoration.img';
import { normalListAni, upDownItemAni } from '../../data/animations.var';

import style from './style.module.scss';

export default function AboutTeam() {
  return (
    <div className={style.wrapperWhite}>
      <div className={style.container}>
        <section className={style.section}>
          <h4 className={style.title}>
            {aboutTeam.title}
            <img src={lineYellow388Dec} alt="" />
          </h4>
          <p className={style.text}>{aboutTeam.text}</p>
          <motion.div
            variants={normalListAni}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={style.list}
          >
            {aboutTeam.cards.map((item) => (
              <motion.div variants={upDownItemAni} className={style.list__item} key={item.id}>
                <div className={style.list__item__img}>
                  <img src={item.imgUrl} alt="" />
                </div>
                <p className={style.list__item__name}>{item.name}</p>
                <p className={style.list__item__who}>{item.who}</p>
                <p className={style.list__item__desc}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
