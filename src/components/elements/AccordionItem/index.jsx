import { useState } from 'react';
import { motion } from 'framer-motion';
import { upDownItemAni } from '../../../data/animations.var';

import style from './style.module.scss';

export default function AccordionItem({ title, text }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={upDownItemAni}
      onClick={() => setOpen(!open)}
      className={style.list__item}
    >
      <div className={style.list__item__content}>
        <h6>{title}</h6>
        {open && <p>{text}</p>}
      </div>
      <svg
        viewBox="0 0 38 39"
        className={open ? `${style.arrow__active} ${style.arrow}` : style.arrow}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.9999 28.2978L5.21387 14.1489L7.4527 11.8511L18.9999 23.7023L30.5472 11.8511L32.786 14.1489L18.9999 28.2978Z"
          fill="black"
        />
      </svg>
    </motion.div>
  );
}
