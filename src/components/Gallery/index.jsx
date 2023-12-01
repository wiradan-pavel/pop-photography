import { useNavigate } from 'react-router-dom';
import PhotoAlbum from 'react-photo-album';
import { gallery } from '../../data/gallery.data';
import { cameraYellowDec, lineYellow213Dec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function Gallery() {
  const navigate = useNavigate();

  return (
    <div className={style.wrapperWhite}>
      <section>
        <div className={style.container}>
          <h4 className={style.title}>
            <img src={cameraYellowDec} alt="" />
            {gallery.title}
            <img className={style.title__line} src={lineYellow213Dec} alt="" />
          </h4>
        </div>
        <div className={style.gallery}>
          <PhotoAlbum
            onClick={() => navigate('/portfolio')}
            layout="columns"
            photos={gallery.photos}
          ></PhotoAlbum>
        </div>
      </section>
    </div>
  );
}
