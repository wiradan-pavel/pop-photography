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

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;
  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const page = blogArticles.slice(firstIndex, lastIndex);
  const npage = Math.ceil(blogArticles.length / perPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <div className={style.wrapperWhite}>
      <div className={style.container}>
        <section id="page" className={style.section}>
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
            {page
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
          <nav className={style.pagination}>
            <ul className={style.pagination__list}>
              {numbers.map((number, index) => (
                <li
                  className={`
                    ${style.pagination__list__item} ${
                    currentPage === number ? style.pagination__list__item__active : ''
                  }`}
                  key={index}
                >
                  <a
                    className={style.pagination__list__link}
                    href="#page"
                    onClick={() => setCurrentPage(number)}
                  >
                    {number}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </div>
    </div>
  );
}
