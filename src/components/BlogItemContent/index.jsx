import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogArticles, blogItemData, blogContent } from '../../data/blog.data';
import { normalListAni, upDownItemAni } from '../../data/animations.var';

import style from './style.module.scss';

export default function BlogItemContent({ id }) {
  const recentArticles = blogArticles.slice(0, 3);
  const currentArticle = blogArticles.filter((item) => id == item.id);
  const article = currentArticle[0];

  return (
    <div className={style.wrapperWhite}>
      <div className={style.container}>
        <div className={style.inner}>
          <aside className={style.aside}>
            <h6 className={style.aside__title}>{blogItemData.recentTitle}</h6>
            <div className={style.aside__listArticles}>
              {recentArticles.map((item) => (
                <Link
                  to={`/blog/${item.id}`}
                  className={style.aside__listArticles__item}
                  key={item.id}
                >
                  <div className={style.aside__listArticles__item__img}>
                    <img src={item.headerImg} alt="" />
                  </div>
                  <div className={style.aside__listArticles__item__content}>
                    <p className={style.aside__listArticles__item__content__date}>{item.date}</p>
                    <h6 className={style.aside__listArticles__item__content__title}>
                      {item.title}
                    </h6>
                  </div>
                </Link>
              ))}
            </div>
            <h6 className={style.aside__title}>{blogItemData.categoryTitle}</h6>
            <div className={style.aside__listCategory}>
              {blogContent.categories.slice(1).map((item, index) => (
                <Link key={index} to="/blog">
                  {item}
                </Link>
              ))}
            </div>
          </aside>
          <motion.section
            variants={normalListAni}
            initial="hidden"
            animate="show"
            className={style.section}
          >
            <div className={style.section__header__img}>
              <img src={article.headerImg} alt="" />
            </div>
            <p className={style.section__date}>{article.date}</p>
            <h6 className={style.section__title}>{article.title}</h6>
            <motion.p variants={upDownItemAni} className={style.section__text}>
              {article.text[0]}
            </motion.p>
            {article.text[1] ? (
              <motion.p variants={upDownItemAni} className={style.section__text}>
                {article.text[1]}
              </motion.p>
            ) : (
              ''
            )}
            {article.text[2] ? (
              <motion.p variants={upDownItemAni} className={style.section__text}>
                {article.text[2]}
              </motion.p>
            ) : (
              ''
            )}
            {article.imgUrls[0] ? (
              <div className={style.section__imgs}>
                {article.imgUrls[0] ? (
                  <div>
                    <motion.img variants={upDownItemAni} src={article.imgUrls[0]} alt="" />
                  </div>
                ) : (
                  ''
                )}
                {article.imgUrls[1] ? (
                  <div>
                    <motion.img variants={upDownItemAni} src={article.imgUrls[1]} alt="" />
                  </div>
                ) : (
                  ''
                )}
              </div>
            ) : (
              ''
            )}
            {article.text[3] ? (
              <motion.p variants={upDownItemAni} className={style.section__text}>
                {article.text[3]}
              </motion.p>
            ) : (
              ''
            )}
            {article.text[4] ? (
              <motion.p variants={upDownItemAni} className={style.section__text}>
                {article.text[4]}
              </motion.p>
            ) : (
              ''
            )}
            {article.text[5] ? (
              <motion.p variants={upDownItemAni} className={style.section__text}>
                {article.text[5]}
              </motion.p>
            ) : (
              ''
            )}
            <div className={style.section__bottom}>
              {article.text[6] ? (
                <div className={style.section__bottom__text}>
                  {article.text[6] ? (
                    <motion.p variants={upDownItemAni} className={style.section__text}>
                      {article.text[6]}
                    </motion.p>
                  ) : (
                    ''
                  )}
                  {article.text[7] ? (
                    <motion.p variants={upDownItemAni} className={style.section__text}>
                      {article.text[7]}
                    </motion.p>
                  ) : (
                    ''
                  )}
                  {article.text[8] ? (
                    <motion.p variants={upDownItemAni} className={style.section__text}>
                      {article.text[8]}
                    </motion.p>
                  ) : (
                    ''
                  )}
                </div>
              ) : (
                ''
              )}

              {article.imgUrls[2] ? (
                <div className={style.section__bottom__img}>
                  <motion.img variants={upDownItemAni} src={article.imgUrls[2]} alt="" />
                </div>
              ) : (
                ''
              )}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
