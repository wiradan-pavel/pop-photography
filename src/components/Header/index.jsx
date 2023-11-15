import { Button, Container, Logo } from '../elements';
import style from './style.module.scss';

export default function Header() {
  return (
    <Container>
      <header className={style.header}>
        <Logo header />
        <div>
          <Button>Book Now</Button>
        </div>
      </header>
    </Container>
  );
}
