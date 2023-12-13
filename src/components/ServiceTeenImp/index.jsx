import { motion } from 'framer-motion';
import { serviceTeenImp } from '../../data/serviceTeen.data';
import { lineYellow416Dec } from '../../data/decoration.img';
import { normalListAni, upDownItemAni } from '../../data/animations.var';

import style from './style.module.scss';

export default function ServiceTeenImp() {
  return (
    <div className={style.wrapperWhite}>
      <div className={style.container}>
        <section className={style.section}>
          <h4 className={style.title}>
            {serviceTeenImp.title}
            <img src={lineYellow416Dec} alt="" />
          </h4>
          <motion.div
            variants={normalListAni}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={style.list}
          >
            {serviceTeenImp.list.map((item) => (
              <motion.div variants={upDownItemAni} className={style.list__div} key={item.id}>
                <div className={style.list__img}>
                  <img src={item.imgUrl} alt="" />
                </div>
                <p className={style.list__title}>{item.title}</p>
                <p className={style.list__text}>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
