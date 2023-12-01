import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Logo } from '../elements';
import { footer } from '../../data/footer.data';
import { downUpItemAni } from '../../data/animations.var';

import style from './style.module.scss';

export default function Footer() {
  return (
    <div className={style.wrapperPurple}>
      <div className={style.container}>
        <motion.footer
          variants={downUpItemAni}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={style.footer}
        >
          <div className={style.content}>
            <div>
              <Logo />
              <p className={style.content__text}>{footer.text}</p>
            </div>

            <div>
              <h5 className={style.content__title}>{footer.quickLinksTitle}</h5>
              <ul className={style.content__quickLinks}>
                {footer.quickLinks.map((item) => (
                  <li key={item.id}>
                    <Link to={item.link}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className={style.content__title}>{footer.contactTitle}</h5>
              {footer.contacts.map((item) => (
                <div className={style.content__contacts} key={item.id}>
                  <a href={item.link}>
                    <img src={item.imgUrl} alt={item.name} />
                  </a>
                  <div>
                    <p className={style.content__contacts__name}>{item.name}</p>
                    <a className={style.content__contacts__link} href={item.link}>
                      <p>{item.text}</p>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h5 className={style.content__title}>{footer.socialLinksTitle}</h5>
              <ul className={style.content__social}>
                {footer.socialLinks.map((item) => (
                  <li key={item.id}>
                    <Link to={item.link}>
                      <img src={item.imgUrl} alt={item.name} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className={style.copy}>{footer.copyrightTitle}</p>
        </motion.footer>
      </div>
    </div>
  );
}
