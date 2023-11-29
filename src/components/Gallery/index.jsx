import { useNavigate } from 'react-router-dom';
import PhotoAlbum from 'react-photo-album';
import { Container, Wrapper } from '../elements';
import { gallery } from '../../data/gallery.data';
import { cameraYellowDec, lineYellow213Dec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function Gallery() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <section>
        <Container>
          <h2 className={style.title}>
            <img src={cameraYellowDec} alt="" />
            {gallery.title}
            <img className={style.title__line} src={lineYellow213Dec} alt="" />
          </h2>
        </Container>
        <div className={style.gallery}>
          <PhotoAlbum
            onClick={() => navigate('/portfolio')}
            layout="columns"
            photos={gallery.photos}
          ></PhotoAlbum>
        </div>
      </section>
    </Wrapper>
  );
}
