import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArticleItem } from '../elements';
import { blogContent, blogArticles } from '../../data/blog.data';
import { lineYellow416Dec } from '../../data/decoration.img';
import { leftRightItemAni, normalListAni, quicklyListAni } from '../../data/animations.var';

import style from './style.module.scss';

export default function BlogContent() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  // 'All'
  // 'Teen Modelling',
  // 'Kids Photography',
  // 'Child Modelling',

  return (
    <div className={style.wrapperWhite}>
      <div className={style.container}>
        <section className={style.section}>
          <h4 className={style.title}>
            {blogContent.title}
            <img src={lineYellow416Dec} alt="" />
          </h4>
          <div className={style.stroke}>
            <motion.div
              variants={normalListAni}
              initial="hidden"
              animate="show"
              className={style.stroke__categories}
            >
              {blogContent.categories.map((item) => (
                <motion.button
                  variants={leftRightItemAni}
                  onClick={() => setCategory(item)}
                  className={item === category ? style.button__active : style.button}
                  key={item}
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>
            <div className={style.stroke__search}>
              <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
            </div>
          </div>
          <motion.div
            variants={quicklyListAni}
            initial="hidden"
            animate="show"
            className={style.articles}
          >
            {blogArticles
              .filter((article) => {
                return category === 'All' ? article : article.category.includes(category);
              })
              .filter((article) => {
                return search.toLowerCase() === ''
                  ? article
                  : article.title.toLowerCase().includes(search);
              })
              .map((article) => (
                <ArticleItem key={article.id} {...article} />
              ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
