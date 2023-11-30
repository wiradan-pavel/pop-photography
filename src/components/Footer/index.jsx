import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container, Logo, Wrapper } from '../elements';
import { footer } from '../../data/footer.data';
import {
  opacityDelayChildren05StaggerChildren02Ani,
  opacityYNegative50ItemAni,
} from '../../data/animations.var';

import style from './style.module.scss';

export default function Footer() {
  return (
    <Wrapper purple>
      <Container>
        <motion.footer
          variants={opacityDelayChildren05StaggerChildren02Ani}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={style.footer}
        >
          <div className={style.content}>
            <div>
              <Logo />
              <motion.p variants={opacityYNegative50ItemAni} className={style.content__text}>
                {footer.text}
              </motion.p>
            </div>

            <div>
              <motion.h4 variants={opacityYNegative50ItemAni} className={style.content__title}>
                {footer.quickLinksTitle}
              </motion.h4>
              <ul className={style.content__quickLinks}>
                {footer.quickLinks.map((item) => (
                  <motion.li variants={opacityYNegative50ItemAni} key={item.id}>
                    <Link to={item.link}>{item.text}</Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <motion.h4 variants={opacityYNegative50ItemAni} className={style.content__title}>
                {footer.contactTitle}
              </motion.h4>
              {footer.contacts.map((item) => (
                <motion.div
                  variants={opacityYNegative50ItemAni}
                  className={style.content__contacts}
                  key={item.id}
                >
                  <a href={item.link}>
                    <img src={item.imgUrl} alt={item.name} />
                  </a>
                  <div>
                    <p className={style.content__contacts__name}>{item.name}</p>
                    <a className={style.content__contacts__link} href={item.link}>
                      <p>{item.text}</p>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <motion.h4 variants={opacityYNegative50ItemAni} className={style.content__title}>
                {footer.socialLinksTitle}
              </motion.h4>
              <ul className={style.content__social}>
                {footer.socialLinks.map((item) => (
                  <motion.li variants={opacityYNegative50ItemAni} key={item.id}>
                    <Link to={item.link}>
                      <img src={item.imgUrl} alt={item.name} />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          <motion.p variants={opacityYNegative50ItemAni} className={style.copy}>
            {footer.copyrightTitle}
          </motion.p>
        </motion.footer>
      </Container>
    </Wrapper>
  );
}
