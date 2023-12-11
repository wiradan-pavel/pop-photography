import { motion } from 'framer-motion';
import { AccordionItem } from '../elements';
import { faqContent } from '../../data/faq.data';
import { lineYellow298Dec } from '../../data/decoration.img';
import { quicklyListAni } from '../../data/animations.var';

import style from './style.module.scss';

export default function Faq() {
  const arrList = faqContent.list.filter((_, i) => i < 6);

  return (
    <div className={style.wrapper__white}>
      <div className={style.container}>
        <section>
          <h4 className={style.title}>
            {faqContent.title}
            <img src={lineYellow298Dec} alt="" />
          </h4>
          <motion.div
            variants={quicklyListAni}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={style.list}
          >
            {arrList.map((item) => (
              <AccordionItem key={item.id} title={item.question} text={item.answer} />
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
