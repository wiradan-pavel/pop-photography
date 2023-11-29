import { Container, Wrapper } from '../elements';
import { aboutTeam } from '../../data/about.data';
import { lineYellow388Dec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function AboutTeam() {
  return (
    <Wrapper>
      <Container>
        <section className={style.section}>
          <h2 className={style.title}>
            {aboutTeam.title}
            <img src={lineYellow388Dec} alt="" />
          </h2>
          <p className={style.text}>{aboutTeam.text}</p>
          <div className={style.list}>
            {aboutTeam.cards.map((item) => (
              <div className={style.list__item} key={item.id}>
                <div className={style.list__item__img}>
                  <img src={item.imgUrl} alt="" />
                </div>
                <p className={style.list__item__name}>{item.name}</p>
                <p className={style.list__item__who}>{item.who}</p>
                <p className={style.list__item__desc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </Wrapper>
  );
}
