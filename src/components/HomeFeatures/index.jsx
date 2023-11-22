import { Link } from 'react-router-dom';
import { Button, Container, Wrapper } from '../elements';
import { home } from '../../data';
import style from './style.module.scss';

export default function HomeFeatures() {
  const data = home[1];

  return (
    <Wrapper>
      <Container>
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

        <div className={style.other}>
          <div className={style.other__left}>
            <img src={data.imgUrlOther} alt="photo" />
          </div>
          <div className={style.other__right}>
            <div className={style.other__right__ten}>
              <p>{data.otherText1}</p>
            </div>
            <div className={style.other__right__year}>
              <p>{data.otherText2}</p>
            </div>
            <div className={style.other__right__exp}>
              <p>{data.otherText3}</p>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}
