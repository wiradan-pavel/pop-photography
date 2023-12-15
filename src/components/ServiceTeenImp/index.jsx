import { motion } from 'framer-motion';
import { ImpItem } from '../elements';
import { serviceTeenImp } from '../../data/serviceTeen.data';
import { lineYellow416Dec } from '../../data/decoration.img';
import { normalListAni } from '../../data/animations.var';

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
              <ImpItem imgUrl={item.imgUrl} title={item.title} text={item.text} key={item.id} />
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
