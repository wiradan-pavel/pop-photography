import { useNavigate } from 'react-router-dom';
import PhotoAlbum from 'react-photo-album';
import { Container, Wrapper } from '../elements';
import { gallery } from '../../data';
import style from './style.module.scss';

export default function Gallery() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <h2 className={style.title}>
          <img src={gallery.titleImgUrl} alt="" />
          {gallery.title}
        </h2>
      </Container>
      <div className={style.gallery}>
        <PhotoAlbum
          onClick={() => navigate('/portfolio')}
          layout="columns"
          photos={gallery.photos}
        ></PhotoAlbum>
      </div>
    </Wrapper>
  );
}
