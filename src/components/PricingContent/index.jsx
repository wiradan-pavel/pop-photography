import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import { pricingContent } from '../../data/pricing.data';
import { bookNowOrderBtn } from '../../data/buttons.data';
import { lineYellow416Dec } from '../../data/decoration.img';
import { normalListAni, scaleItemAni } from '../../data/animations.var';

import style from './style.module.scss';

export default function PricingContent() {
  return (
    <div className={style.wrapperWhite}>
      <div className={style.container}>
        <section className={style.section}>
          <h4 className={style.title}>
            {pricingContent.title}
            <img src={lineYellow416Dec} alt="" />
          </h4>
          <motion.div
            variants={normalListAni}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={style.cards}
          >
            {pricingContent.cards.map((card) => (
              <motion.div variants={scaleItemAni} className={style.card} key={card.id}>
                <p
                  className={
                    card.isTarget
                      ? classNames(style.card__title, style.card__title__active)
                      : style.card__title
                  }
                >
                  {card.title}
                  <br />
                  {card.title2}
                </p>
                <p
                  className={
                    card.isTarget
                      ? classNames(style.card__price, style.card__price__active)
                      : style.card__price
                  }
                >
                  <span>{card.valute}</span>
                  {card.price}
                </p>
                <p
                  className={
                    card.isTarget
                      ? classNames(style.card__text, style.card__text__active)
                      : style.card__text
                  }
                >
                  {card.text}
                </p>
                <ul className={style.card__list}>
                  {card.list.map((li, index) => (
                    <li
                      className={
                        card.isTarget
                          ? classNames(style.card__list__item, style.card__list__item__active)
                          : style.card__list__item
                      }
                      key={index}
                    >
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.1921 22.3961C5.02071 22.3961 0 17.3726 0 11.1979C0 5.0231 5.02071 0 11.1921 0C17.3634 0 22.3841 5.0231 22.3841 11.1979C22.3841 17.3726 17.3634 22.3961 11.1921 22.3961ZM11.1921 0.611562C5.35784 0.611562 0.611223 5.36041 0.611223 11.1983C0.611223 17.0361 5.35744 21.7853 11.1921 21.7853C17.0267 21.7853 21.7729 17.0361 21.7729 11.1983C21.7729 5.36041 17.0267 0.611562 11.1921 0.611562Z"
                          fill={card.isTarget ? '#FFF' : '#A4CF76'}
                        />
                        <path
                          d="M9.05716 17.2481L4.08594 12.324L5.70897 10.6837L9.06115 14.003L16.6122 6.55957L18.2312 8.20387L9.05716 17.2481Z"
                          fill={card.isTarget ? '#FFF' : '#A4CF76'}
                        />
                      </svg>
                      {li}
                    </li>
                  ))}
                </ul>
                <div className={style.btn__inner}>
                  <Link to={bookNowOrderBtn.link}>
                    <button className={style.btn}>{bookNowOrderBtn.text}</button>
                  </Link>
                </div>
                <div className={style.card__discount}>
                  <p className={style.card__discount__num}>{card.discount}</p>
                  <p className={style.card__discount__off}>
                    <span>%</span>off
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
