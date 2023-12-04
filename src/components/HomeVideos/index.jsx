import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import { homeVideo } from '../../data/home.data';
import { lineYellow213Dec, youtubePurpleDec } from '../../data/decoration.img';
import { normalListAni, scaleItemAni } from '../../data/animations.var';

import style from './style.module.scss';

export default function HomeVideos() {
  return (
    <div className={style.wrapperWhite}>
      <div className={style.container}>
        <section>
          <h4 className={style.title}>
            {homeVideo.title}
            <img className={style.title__youtube} src={youtubePurpleDec} alt="" />
            <img className={style.title__line} src={lineYellow213Dec} alt="" />
          </h4>
          <motion.div
            variants={normalListAni}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={style.grid}
          >
            <motion.div variants={scaleItemAni} className={style.grid__video}>
              <ReactPlayer
                width="100%"
                height="670px"
                url={homeVideo.videoUrls[0]}
                controls
                playing
                light={
                  <img
                    style={{ width: '100%', height: '670px', objectFit: 'cover' }}
                    src={homeVideo.previewImgUrls[0]}
                    alt="previewVideoPhoto"
                  />
                }
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
            <motion.div variants={scaleItemAni} className={style.grid__video}>
              <ReactPlayer
                width="100%"
                height="315px"
                url={homeVideo.videoUrls[1]}
                controls
                playing
                light={
                  <img
                    style={{ width: '100%', height: '315px', objectFit: 'cover' }}
                    src={homeVideo.previewImgUrls[1]}
                    alt="previewVideoPhoto"
                  />
                }
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
            <motion.div variants={scaleItemAni} className={style.grid__video}>
              <ReactPlayer
                width="100%"
                height="315px"
                url={homeVideo.videoUrls[2]}
                controls
                playing
                light={
                  <img
                    style={{ width: '100%', height: '315px', objectFit: 'cover' }}
                    src={homeVideo.previewImgUrls[2]}
                    alt="previewVideoPhoto"
                  />
                }
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
          </motion.div>
        </section>
      </div>
    </div>
  );
}
