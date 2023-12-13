import { motion } from 'framer-motion';
import { serviceTeenOppo } from '../../data/serviceTeen.data';
import { lineYellow306Dec } from '../../data/decoration.img';
import { normalListAni, upDownItemAni } from '../../data/animations.var';

import style from './style.module.scss';

export default function ServiceTeenOppo() {
  return (
    <div className={style.wrapperWhite}>
      <div className={style.container}>
        <section className={style.section}>
          <h4 className={style.title}>
            {serviceTeenOppo.title}
            <img src={lineYellow306Dec} alt="" />
          </h4>
          <motion.div
            variants={normalListAni}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={style.list}
          >
            {serviceTeenOppo.list.map((item) => (
              <motion.div variants={upDownItemAni} className={style.list__item} key={item.id}>
                <img src={item.imgUrl} alt="" />
                <p className={style.list__item__title}>{item.title}</p>
                <p className={style.list__item__text}>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
