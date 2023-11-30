import { motion } from 'framer-motion';
import { SectionHeader } from '../elements';
import { aboutHeader } from '../../data/about.data';
import { lineYellow164Dec } from '../../data/decoration.img';

import style from './style.module.scss';
import { opacityXNegative50ItemAni } from '../../data/animations.var';

export default function AboutHeader() {
  return (
    <SectionHeader imgUrl={aboutHeader.imgUrl}>
      <motion.h3
        variants={opacityXNegative50ItemAni}
        initial="hidden"
        animate="show"
        className={style.title}
      >
        {aboutHeader.title}
      </motion.h3>
      <img className={style.title__line} src={lineYellow164Dec} alt="" />
    </SectionHeader>
  );
}
