import ReactPlayer from 'react-player';
import { Wrapper, Container } from '../elements';
import { homeVideo } from '../../data/home.data';
import { lineYellow213Dec, youtubePurpleDec } from '../../data/decoration.data';

import style from './style.module.scss';

export default function HomeVideos() {
  return (
    <Wrapper>
      <Container>
        <section>
          <h2 className={style.title}>
            {homeVideo.title}
            <img className={style.title__youtube} src={youtubePurpleDec} alt="" />
            <img className={style.title__line} src={lineYellow213Dec} alt="" />
          </h2>
          <div className={style.grid}>
            <div className={style.grid__video}>
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
            </div>
            <div className={style.grid__video}>
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
            </div>
            <div className={style.grid__video}>
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
            </div>
          </div>
        </section>
      </Container>
    </Wrapper>
  );
}
