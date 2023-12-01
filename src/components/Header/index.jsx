import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Logo, Nav } from '../elements';
import { bookNowBtn } from '../../data/buttons.data';
import { upDownItemAni } from '../../data/animations.var';

import style from './style.module.scss';

export default function Header() {
  return (
    <div className={style.wrapperPurple}>
      <div className={style.container}>
        <motion.header
          variants={upDownItemAni}
          initial="hidden"
          animate="show"
          className={style.header}
        >
          <Logo top />
          <div className={style.div}>
            <Nav />

            <button className={style.btn}>
              <Link to={bookNowBtn.link}>{bookNowBtn.text}</Link>
            </button>
          </div>
        </motion.header>
      </div>
    </div>
  );
}
