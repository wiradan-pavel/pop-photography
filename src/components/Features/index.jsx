import { Container, Wrapper } from '../elements';
import { home } from '../../data';
import style from './style.module.scss';

export default function Features() {
  const data = home[1];

  return (
    <Wrapper>
      <Container>
        <div className={style.title__wrap}>
          <h2 className={style.title}>{data.title}</h2>
        </div>
        <div className={style.list}>
          {data.cards.map((item) => (
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
