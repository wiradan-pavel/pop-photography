import { Container, Wrapper } from '../elements';
import { aboutStory } from '../../data/about.data';
import { lineYellow388Dec } from '../../data/decoration.data';

import style from './style.module.scss';

export default function AboutStory() {
  return (
    <Wrapper>
      <Container>
        <section className={style.section}>
          <h2 className={style.title}>
            {aboutStory.title}
            <img src={lineYellow388Dec} alt="" />
          </h2>
          <div className={style.list}>
            {aboutStory.cards.map((item) => (
              <div className={style.list__item} key={item.id}>
                <div className={style.list__item__img}>
                  <img src={item.imgUrl} alt="" />
                </div>
                <h5 className={style.list__item__title}>{item.title}</h5>
                <p className={style.list__item__text}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </Wrapper>
  );
}
