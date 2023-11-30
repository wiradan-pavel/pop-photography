import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Container, Logo, Nav, Wrapper } from '../elements';
import { bookNowBtn } from '../../data/buttons.data';
import { upDownItemAni } from '../../data/animations.var';

import style from './style.module.scss';

export default function Header() {
  return (
    <Wrapper purple>
      <Container>
        <div>
          <motion.header
            variants={upDownItemAni}
            initial="hidden"
            animate="show"
            className={style.header}
          >
            <Logo top />
            <div className={style.div}>
              <Nav />

              <Button>
                <Link to={bookNowBtn.link}>{bookNowBtn.text}</Link>
              </Button>
            </div>
          </motion.header>
        </div>
      </Container>
    </Wrapper>
  );
}
