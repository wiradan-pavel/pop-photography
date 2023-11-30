import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wrapper, Container, Button } from '../elements';
import { testimonials } from '../../data/testimonials.data';
import { bookNowBtn } from '../../data/buttons.data';
import {
  opacityStaggerChildren05Ani,
  opacityDelayChildren05StaggerChildren05Ani,
  opacityDuration1Delay05Ani,
  opacityItemAni,
  scaleItemAni,
} from '../../data/animations.var';
import { lineYellow213Dec, planeTurquoiseDec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function Testimonials() {
  return (
    <Wrapper>
      <Container>
        <section>
          <motion.h2
            variants={opacityDelayChildren05StaggerChildren05Ani}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={style.title}
          >
            {testimonials.title}
            <motion.img
              variants={opacityItemAni}
              className={style.title__plane}
              src={planeTurquoiseDec}
              alt=""
            />
            <motion.img
              variants={opacityItemAni}
              className={style.title__line}
              src={lineYellow213Dec}
              alt=""
            />
          </motion.h2>
          <motion.div
            variants={opacityStaggerChildren05Ani}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={style.list}
          >
            {testimonials.list.map((item) => (
              <motion.div variants={scaleItemAni} className={style.list__item} key={item.id}>
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
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={opacityDuration1Delay05Ani}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={style.button}
          >
            <Button>
              <Link to={bookNowBtn.link}>{bookNowBtn.text}</Link>
            </Button>
          </motion.div>
        </section>
      </Container>
    </Wrapper>
  );
}
