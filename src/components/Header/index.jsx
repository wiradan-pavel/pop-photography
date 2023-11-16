import { Link } from 'react-router-dom';
import { Button, Container, Logo, Nav, Wrapper } from '../elements';
import { header } from '../../data';
import style from './style.module.scss';

export default function Header() {
  return (
    <Wrapper purple>
      <Container>
        <header className={style.header}>
          <Logo top />
          <div className={style.div}>
            <Nav list={header[0]} />
            <Button>
              <Link to={header[1].link}>{header[1].text}</Link>
            </Button>
          </div>
        </header>
      </Container>
    </Wrapper>
  );
}
