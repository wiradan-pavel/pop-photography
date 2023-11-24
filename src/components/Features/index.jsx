import { Container, Wrapper } from '../elements';
import { features } from '../../data/features.data';
import { bulbYellowDec, lineYellow298Dec } from '../../data/decoration.data';

import style from './style.module.scss';

export default function Features() {
  return (
    <Wrapper>
      <Container>
        <section>
          <div className={style.title__wrap}>
            <h2 className={style.title}>
              {features.title}
              <img className={style.title__bulb} src={bulbYellowDec} alt="" />
              <img className={style.title__line} src={lineYellow298Dec} alt="" />
            </h2>
          </div>
          <div className={style.list}>
            {features.cards.map((item) => (
              <div className={style.list__item} key={item.id}>
                <div className={style.list__item__img}>
                  <img src={item.imgUrl} alt="photo" />
                </div>
                <p className={style.list__item__p}>{item.title}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </Wrapper>
  );
}
