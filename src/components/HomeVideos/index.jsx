import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import { Wrapper, Container } from '../elements';
import { homeVideo } from '../../data/home.data';
import { lineYellow213Dec, youtubePurpleDec } from '../../data/decoration.img';
import { opacityStaggerChildren05Ani, opacityItemAni } from '../../data/animations.var';

import style from './style.module.scss';

export default function HomeVideos() {
  return (
    <Wrapper>
      <Container>
        <motion.section
          variants={opacityStaggerChildren05Ani}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={opacityItemAni} className={style.title}>
            {homeVideo.title}
            <img className={style.title__youtube} src={youtubePurpleDec} alt="" />
            <img className={style.title__line} src={lineYellow213Dec} alt="" />
          </motion.h2>
          <div className={style.grid}>
            <motion.div variants={opacityItemAni} className={style.grid__video}>
              <ReactPlayer
                width="1030px"
                height="870px"
                url={homeVideo.videoUrls[0]}
                controls
                playing
                light={<img src={homeVideo.previewImgUrls[0]} alt="previewVideoPhoto" />}
                playIcon={
                  <img
                    style={{ position: 'absolute' }}
                    width="136px"
                    height="136px"
                    src={homeVideo.playIcon}
                    alt="playIcon"
                  />
                }
              />
            </motion.div>
            <motion.div variants={opacityItemAni} className={style.grid__video}>
              <ReactPlayer
                width="520px"
                height="415px"
                url={homeVideo.videoUrls[1]}
                controls
                playing
                light={<img src={homeVideo.previewImgUrls[1]} alt="previewVideoPhoto" />}
                playIcon={
                  <img
                    style={{ position: 'absolute' }}
                    width="60px"
                    height="60px"
                    src={homeVideo.playIcon}
                    alt="playIcon"
                  />
                }
              />
            </motion.div>
            <motion.div variants={opacityItemAni} className={style.grid__video}>
              <ReactPlayer
                width="520px"
                height="415px"
                url={homeVideo.videoUrls[2]}
                controls
                playing
                light={<img src={homeVideo.previewImgUrls[2]} alt="previewVideoPhoto" />}
                playIcon={
                  <img
                    style={{ position: 'absolute' }}
                    width="60px"
                    height="60px"
                    src={homeVideo.playIcon}
                    alt="playIcon"
                  />
                }
              />
            </motion.div>
          </div>
        </motion.section>
      </Container>
    </Wrapper>
  );
}
