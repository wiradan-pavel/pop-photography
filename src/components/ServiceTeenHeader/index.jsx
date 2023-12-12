import { SectionHeader } from '../elements';
import { serviceTeenHeader } from '../../data/serviceTeen.data';
import { lineYellow95Dec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function ServiceTeenHeader() {
  return (
    <SectionHeader imgUrl={serviceTeenHeader.imgUrl}>
      <h3 className={style.titleHeader}>
        {serviceTeenHeader.title}
        <img className={style.titleHeader__line} src={lineYellow95Dec} alt="" />
      </h3>
    </SectionHeader>
  );
}
