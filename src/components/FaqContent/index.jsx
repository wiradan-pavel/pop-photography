import { motion } from 'framer-motion';
import { AccordionItem } from '../elements';
import { faqContent } from '../../data/faq.data';
import { quicklyListAni } from '../../data/animations.var'; 

import style from './style.module.scss';

export default function FaqContent() {
  return (
    <div className={style.wrapperWhite}>
      <div className={style.container}>
        <section className={style.section}>
          <div className={style.search}>
            <input
              className={style.search__input}
              type="text"
              placeholder="Search Question, Keyword, Topics"
            />

            <button className={style.btn}>Search</button>
          </div>
          <motion.div
            variants={quicklyListAni}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={style.content}
          >
            {faqContent.list.map((item) => (
              <AccordionItem key={item.id} title={item.question} text={item.answer} />
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
