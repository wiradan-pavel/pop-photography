import ReactPlayer from 'react-player';
import { Wrapper, Container } from '../../elements';
import { home } from '../../../data';
import style from './style.module.scss';

export default function HomeVideos() {
  const data = home[2];

  return (
    <Wrapper>
      <Container>
        <h2 className={style.title}>{data.title}</h2>
        <div className={style.grid}>
          <div className={style.grid__video}>
            <ReactPlayer
              width="1030px"
              height="870px"
              url={data.videos[0].url}
              controls
              playing
              light={<img src={data.previewVideosImgUrls[0]} alt="previewVideoPhoto" />}
              playIcon={
                <img
                  style={{ position: 'absolute' }}
                  width="136px"
                  height="136px"
                  src={data.playIconUrl}
                  alt="playIcon"
                />
              }
            />
          </div>
          <div className={style.grid__video}>
            <ReactPlayer
              width="520px"
              height="415px"
              url={data.videos[1].url}
              controls
              playing
              light={<img src={data.previewVideosImgUrls[1]} alt="previewVideoPhoto" />}
              playIcon={
                <img
                  style={{ position: 'absolute' }}
                  width="60px"
                  height="60px"
                  src={data.playIconUrl}
                  alt="playIcon"
                />
              }
            />
          </div>
          <div className={style.grid__video}>
            <ReactPlayer
              width="520px"
              height="415px"
              url={data.videos[2].url}
              controls
              playing
              light={<img src={data.previewVideosImgUrls[2]} alt="previewVideoPhoto" />}
              playIcon={
                <img
                  style={{ position: 'absolute' }}
                  width="60px"
                  height="60px"
                  src={data.playIconUrl}
                  alt="playIcon"
                />
              }
            />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}
