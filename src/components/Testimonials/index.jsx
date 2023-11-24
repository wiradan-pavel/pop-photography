import { Link } from 'react-router-dom';
import { Wrapper, Container, Button } from '../elements';
import { testimonials } from '../../data/testimonials.data';
import { bookNowBtn } from '../../data/buttons.data';
import { lineYellow213Dec, planeTurquoiseDec } from '../../data/decoration.data';

import style from './style.module.scss';

export default function Testimonials() {
  return (
    <Wrapper>
      <Container>
        <section>
          <h2 className={style.title}>
            {testimonials.title}
            <img className={style.title__plane} src={planeTurquoiseDec} alt="" />
            <img className={style.title__line} src={lineYellow213Dec} alt="" />
          </h2>
          <div className={style.list}>
            {testimonials.list.map((item) => (
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
                        src={
                          num === 1
                            ? testimonials.star100
                            : num === 0.5
                            ? testimonials.star50
                            : testimonials.star0
                        }
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
              <Link to={bookNowBtn.link}>{bookNowBtn.text}</Link>
            </Button>
          </div>
        </section>
      </Container>
    </Wrapper>
  );
}
