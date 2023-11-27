import { SectionHeader } from '../elements';
import { aboutHeader } from '../../data/about.data';
import { lineYellow164Dec } from '../../data/decoration.data';

import style from './style.module.scss';

export default function AboutHeader() {
  return (
    <SectionHeader imgUrl={aboutHeader.imgUrl}>
      <h3 className={style.title}>{aboutHeader.title}</h3>
      <img className={style.title__line} src={lineYellow164Dec} alt="" />
    </SectionHeader>
  );
}