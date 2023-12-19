import { useState } from 'react';
import { ArticleItem } from '../elements';
import { blogContent, blogArticles } from '../../data/blog.data';
import { lineYellow416Dec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function BlogContent() {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div className={style.wrapperWhite}>
      <div className={style.container}>
        <section className={style.section}>
          <h4 className={style.title}>
            {blogContent.title}
            <img src={lineYellow416Dec} alt="" />
          </h4>
          <div className={style.stroke}>
            <div className={style.stroke__categories}>
              {blogContent.categories.map((category, index) => (
                <button
                  onClick={() => setActiveButton(index)}
                  className={activeButton === index ? style.button__active : style.button}
                  key={index}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className={style.stroke__search}>
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className={style.articles}>
            {blogArticles.map((article) => (
              <ArticleItem key={article.id} {...article} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
