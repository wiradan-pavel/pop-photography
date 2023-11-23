import { Link } from 'react-router-dom';
import { Button, Container, Logo, Nav, Wrapper } from '../elements';
import { bookNow } from '../../data/buttons.data';
import style from './style.module.scss';

export default function Header() {
  return (
    <Wrapper purple>
      <Container>
        <header className={style.header}>
          <Logo top />
          <div className={style.div}>
            <Nav />
            <Button>
              <Link to={bookNow.link}>{bookNow.text}</Link>
            </Button>
          </div>
        </header>
      </Container>
    </Wrapper>
  );
}
