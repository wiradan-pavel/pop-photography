import { Button, Container, Wrapper } from '../../elements';
import { home } from '../../../data';
import style from './style.module.scss';
import { Link } from 'react-router-dom';

export default function HomeFeatures() {
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

        <div className={style.why}>
          <div className={style.why__left}>
            <h2 className={style.why__left__title}>
              {data.whyChooseTitle1}
              <br /> {data.whyChooseTitle2}
            </h2>
            <ol className={style.why__left__list}>
              {data.list.map((item) => (
                <li key={item.id}>{item.text}</li>
              ))}
            </ol>
            <Button>
              <Link to={data.button.link}>{data.button.text}</Link>
            </Button>
          </div>
          <div className={style.why__right}>
            <img className={style.why__right__photomain__left} src={data.imgUrls[0]} alt="photo" />
            <img className={style.why__right__photomain__right} src={data.imgUrls[1]} alt="photo" />
            <img className={style.why__right__photodec__left} src={data.imgUrls[4]} alt="" />
            <img className={style.why__right__photodec__right1} src={data.imgUrls[2]} alt="" />
            <img className={style.why__right__photodec__right2} src={data.imgUrls[3]} alt="" />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}