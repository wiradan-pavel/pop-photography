import { SectionHeader } from '../elements';
import { aboutHeader } from '../../data/about.data';
import { lineYellow164Dec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function AboutHeader() {
  return (
    <SectionHeader imgUrl={aboutHeader.imgUrl}>
      <h3 className={style.titleHeader}>{aboutHeader.title}</h3>
      <img className={style.titleHeader__line} src={lineYellow164Dec} alt="" />
    </SectionHeader>
  );
}
