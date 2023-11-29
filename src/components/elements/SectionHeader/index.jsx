import { Wrapper, Container } from '../index';
import {
  cameraWhiteDec,
  dotsWhite72Dec,
  spiralYellowDec,
  waveWhiteDec,
  dotsWhite18Dec,
} from '../../../data/decoration.img';

import style from './style.module.scss';

export default function SectionHeader({ imgUrl, children }) {
  return (
    <section>
      <Wrapper purple>
        <Container>
          <div className={style.section}>
            {children}
            <div className={style.img}>
              <img src={imgUrl} alt="" />
              <img className={style.img__spiral} src={spiralYellowDec} alt="" />
              <img className={style.img__wave} src={waveWhiteDec} alt="" />
              <img className={style.img__dots18} src={dotsWhite18Dec} alt="" />
            </div>
          </div>
        </Container>
        <img className={style.dec__camera} src={cameraWhiteDec} alt="" />
        <img className={style.dec__dots72} src={dotsWhite72Dec} alt="" />
      </Wrapper>
    </section>
  );
}
