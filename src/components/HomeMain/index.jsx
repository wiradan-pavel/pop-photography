import { Link } from 'react-router-dom';
import { Button, Container, Wrapper } from '../elements';
import { home } from '../../data';
import style from './style.module.scss';

export default function HomeMain() {
  const data = home[0];

  return (
    <Wrapper purple>
      <div className={style.dec}>
        <Container>
          <div className={style.div}>
            <div className={style.div__left}>
              <h1 className={style.div__left__title}>{data.title}</h1>
              <p className={style.div__left__text}>{data.text}</p>
              <Button>
                <Link to={data.linkButton}>{data.button}</Link>
              </Button>
            </div>
            <div className={style.div__right}>
              <div className={style.div__right__imgs}>
                <div className={style.div__right__imgs__back}>
                  <img src={data.imgs[0].imgUrls[0]} alt={data.imgs[0].name} />
                  <img src={data.imgs[0].imgUrls[1]} alt={data.imgs[0].name} />
                </div>
                <div className={style.div__right__imgs__front}>
                  {data.imgs[1].imgUrls.map((url, index) => (
                    <img key={url} src={url} alt={`frontImage${index}`} />
                  ))}
                </div>
              </div>
              <div className={style.div__right__social}>
                <div className={style.div__right__social__line}></div>
                <ul className={style.div__right__social__list}>
                  {data.social.map((item) => (
                    <li key={item.id}>
                      <Link to={item.link}>
                        <img src={item.imgUrl} alt={item.name} />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className={style.div__right__social__line}></div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Wrapper>
  );
}
