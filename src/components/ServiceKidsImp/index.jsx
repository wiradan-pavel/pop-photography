import { motion } from 'framer-motion';
import { ImpItem } from '../elements';
import { serviceKidsImp } from '../../data/serviceKids.data';
import { lineYellow298Dec } from '../../data/decoration.img';
import { normalListAni } from '../../data/animations.var';

import style from './style.module.scss';

export default function ServiceKidsImp() {
  return (
    <div className={style.wrapperWhite}>
      <div className={style.container}>
        <section className={style.section}>
          <h4 className={style.title}>
            {serviceKidsImp.title}
            <img src={lineYellow298Dec} alt="" />
          </h4>
          <motion.div
            variants={normalListAni}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={style.list}
          >
            {serviceKidsImp.list.map((item) => (
              <ImpItem imgUrl={item.imgUrl} title={item.title} text={item.text} key={item.id} />
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
