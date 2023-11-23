import { Container, Logo, Wrapper } from '../elements';
import { footer } from '../../data/footer.data';
import style from './style.module.scss';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Wrapper purple>
      <Container>
        <footer className={style.footer}>
          <div className={style.content}>
            <div>
              <Logo />
              <p className={style.content__text}>{footer.text}</p>
            </div>

            <div>
              <h4 className={style.content__title}>{footer.quickLinksTitle}</h4>
              <ul className={style.content__quickLinks}>
                {footer.quickLinks.map((item) => (
                  <li key={item.id}>
                    <Link to={item.link}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={style.content__title}>{footer.contactTitle}</h4>
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
              <h4 className={style.content__title}>{footer.socialLinksTitle}</h4>
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
        </footer>
      </Container>
    </Wrapper>
  );
}
