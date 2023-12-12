import { useState } from 'react';
import { motion } from 'framer-motion';
import { AccordionItem } from '../elements';
import { faqContent } from '../../data/faq.data';
import { quicklyListAni } from '../../data/animations.var';

import style from './style.module.scss';

export default function FaqContent() {
  const [search, setSearch] = useState('');

  return (
    <div className={style.wrapperWhite}>
      <div className={style.container}>
        <section className={style.section}>
          <div className={style.search}>
            <input
              onChange={(e) => setSearch(e.target.value)}
              className={style.search__input}
              type="text"
              placeholder="Search Question, Keyword, Topics"
            />
          </div>
          <motion.div
            variants={quicklyListAni}
            initial="hidden"
            animate="show"
            className={style.content}
          >
            {faqContent.list
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.question.toLowerCase().includes(search);
              })
              .map((item) => (
                <AccordionItem key={item.id} title={item.question} text={item.answer} />
              ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
