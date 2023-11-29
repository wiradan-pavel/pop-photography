import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Container, Logo, Nav, Wrapper } from '../elements';
import { bookNowBtn } from '../../data/buttons.data';
import { headerAni } from '../../data/animations.var';

import style from './style.module.scss';

export default function Header() {
  return (
    <Wrapper purple>
      <Container>
        <div>
          <header className={style.header}>
            <Logo top />
            <div className={style.div}>
              <Nav />

              <motion.div variants={headerAni} initial="hidden" animate="show">
                <Button>
                  <Link to={bookNowBtn.link}>{bookNowBtn.text}</Link>
                </Button>
              </motion.div>
            </div>
          </header>
        </div>
      </Container>
    </Wrapper>
  );
}
