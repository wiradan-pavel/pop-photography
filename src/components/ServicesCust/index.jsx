import { motion } from 'framer-motion';
import { servicesCust } from '../../data/services.data';
import { lineYellow416Dec } from '../../data/decoration.img';
import { normalListAni, upDownItemAni } from '../../data/animations.var';

import style from './style.module.scss';

export default function ServicesCust() {
  return (
    <div className={style.wrapper__white}>
      <div className={style.container}>
        <section>
          <h4 className={style.title}>
            {servicesCust.title}
            <img src={lineYellow416Dec} alt="" />
          </h4>
          <motion.div
            variants={normalListAni}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={style.flex}
          >
            {servicesCust.list.map((item) => (
              <motion.div variants={upDownItemAni} key={item.id} className={style.flex__item}>
                <img src={item.imgUrl} alt="" />
                <p>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
