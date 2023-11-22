import { Link } from 'react-router-dom';
import { Wrapper, Container, Button } from '../../elements';
import { home } from '../../../data';
import starUrl from '../../../assets/icons/other/star.svg';
import starMiddleUrl from '../../../assets/icons/other/starMiddle.svg';
import starEmptyUrl from '../../../assets/icons/other/starEmpty.svg';
import style from './style.module.scss';

export default function HomeTestimonials() {
  const data = home[3];

  return (
    <Wrapper>
      <Container>
        <h2 className={style.title}>{data.title}</h2>
        <div className={style.list}>
          {data.list.map((item) => (
            <div className={style.list__item} key={item.id}>
              <img className={style.list__item__img} src={item.imgUrl} alt="photo" />
              <p className={style.list__item__text}>{item.text}</p>
              <div className={style.list__item__bottom}>
                <div className={style.list__item__bottom__left}>
                  <p className={style.list__item__bottom__left__nick}>{item.nickname}</p>
                  <p className={style.list__item__bottom__left__who}>{item.who}</p>
                </div>
                <div className={style.list__item__bottom__right}>
                  {item.rate.map((num, index) => (
                    <img
                      key={index}
                      src={num === 1 ? starUrl : num === 0.5 ? starMiddleUrl : starEmptyUrl}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={style.button}>
          <Button>
            <Link to={data.button.link}>{data.button.text}</Link>
          </Button>
        </div>
      </Container>
    </Wrapper>
  );
}
