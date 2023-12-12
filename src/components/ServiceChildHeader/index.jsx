import { SectionHeader } from '../elements';
import { serviceChildHeader } from '../../data/serviceChild.data';
import { lineYellow95Dec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function ServiceChildHeader() {
  return (
    <SectionHeader imgUrl={serviceChildHeader.imgUrl}>
      <h3 className={style.titleHeader}>
        {serviceChildHeader.title}
        <img className={style.titleHeader__line} src={lineYellow95Dec} alt="" />
      </h3>
    </SectionHeader>
  );
}
