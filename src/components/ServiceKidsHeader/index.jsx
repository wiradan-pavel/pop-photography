import { SectionHeader } from '../elements';
import { serviceKidsHeader } from '../../data/serviceKids.data';
import { lineYellow95Dec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function ServiceKidsHeader() {
  return (
    <SectionHeader imgUrl={serviceKidsHeader.imgUrl}>
      <h3 className={style.titleHeader}>
        {serviceKidsHeader.title}
        <img className={style.titleHeader__line} src={lineYellow95Dec} alt="" />
      </h3>
    </SectionHeader>
  );
}
