import { Container, Wrapper } from '../elements';
import { features } from '../../data/features.data';
import style from './style.module.scss';

export default function Features() {
  return (
    <Wrapper>
      <Container>
        <div className={style.title__wrap}>
          <h2 className={style.title}>{features.title}</h2>
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
      </Container>
    </Wrapper>
  );
}
