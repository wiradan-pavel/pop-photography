import { motion } from 'framer-motion';
import { serviceChildWhy } from '../../data/serviceChild.data';
import { lineYellow298Dec } from '../../data/decoration.img';
import { leftRightItemAni, normalListAni } from '../../data/animations.var';

import style from './style.module.scss';

export default function ServiceChildWhy() {
  return (
    <div className={style.wrapperWhite}>
      <div className={style.container}>
        <section className={style.section}>
          <h4 className={style.title}>
            {serviceChildWhy.title}
            <img src={lineYellow298Dec} alt="" />
          </h4>
          <div className={style.content}>
            <div className={style.content__img}>
              <img src={serviceChildWhy.imgUrl} alt="" />
            </div>
            <motion.div
              variants={normalListAni}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={style.content__list}
            >
              {serviceChildWhy.list.map((item) => (
                <motion.div
                  variants={leftRightItemAni}
                  className={style.content__list__item}
                  key={item.id}
                >
                  <div className={style.content__list__item__img}>
                    <img src={item.imgUrl} alt="" />
                  </div>
                  <p className={style.content__list__item__title}>{item.title}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
