import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PhotoAlbum from 'react-photo-album';
import { Container, Wrapper } from '../elements';
import { gallery } from '../../data/gallery.data';
import {
  opacityXNegative200Duration2Delay1Ani,
  opacityXPositive200Duration2Delay1Ani,
} from '../../data/animations.var';
import { cameraYellowDec, lineYellow213Dec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function Gallery() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <section>
        <Container>
          <motion.h2
            variants={opacityXPositive200Duration2Delay1Ani}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={style.title}
          >
            <img src={cameraYellowDec} alt="" />
            {gallery.title}
            <img className={style.title__line} src={lineYellow213Dec} alt="" />
          </motion.h2>
        </Container>
        <motion.div
          variants={opacityXNegative200Duration2Delay1Ani}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={style.gallery}
        >
          <PhotoAlbum
            onClick={() => navigate('/portfolio')}
            layout="columns"
            photos={gallery.photos}
          ></PhotoAlbum>
        </motion.div>
      </section>
    </Wrapper>
  );
}
