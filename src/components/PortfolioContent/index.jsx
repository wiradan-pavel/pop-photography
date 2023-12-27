import { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import { portfolioContent } from '../../data/portfolio.data';
import { cameraYellowDec, lineYellow213Dec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function PortfolioContent() {
  // LOAD MORE
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 9;
  const lastIndex = currentPage * perPage;
  const firstIndex = 0;
  const page = portfolioContent.photos.slice(firstIndex, lastIndex);
  const npage = Math.ceil(portfolioContent.photos.length / perPage);

  // RESPONSE COLUMNS
  const columnsCount = window.innerWidth < 400 ? 1 : window.innerWidth < 768 ? 2 : 3;

  return (
    <div className={style.wrapperWhite}>
      <div className={style.container}>
        <section className={style.section}>
          <h4 className={style.title}>
            <img className={style.title__camera} src={cameraYellowDec} alt="" />
            {portfolioContent.title}
            <img className={style.title__line} src={lineYellow213Dec} alt="" />
          </h4>
          <div className={style.gallery}>
            <PhotoAlbum layout="columns" columns={columnsCount} photos={page} />
          </div>
          <div className={style.btn__inner}>
            {npage === currentPage ? (
              ''
            ) : (
              <button onClick={() => setCurrentPage(currentPage + 1)} className={style.btn}>
                {portfolioContent.buttonText}
              </button>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
