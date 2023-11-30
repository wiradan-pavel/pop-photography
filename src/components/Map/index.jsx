import { motion } from 'framer-motion';
import { map } from '../../data/map.data';
import { lineYellow416Dec } from '../../data/decoration.img';

import style from './style.module.scss';
import {
  opacityDelayChildren05StaggerChildren05Ani,
  opacityItemAni,
  opacityXNegative50ItemAni,
} from '../../data/animations.var';

export default function Map() {
  return (
    <motion.section
      variants={opacityDelayChildren05StaggerChildren05Ani}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={style.section}
    >
      <motion.h2 variants={opacityXNegative50ItemAni} className={style.title}>
        {map.title}
        <img src={lineYellow416Dec} alt="" />
      </motion.h2>
      <motion.div variants={opacityItemAni} className={style.map}>
        <img src={map.mapImgUrl} alt="" />
      </motion.div>
    </motion.section>
  );
}
