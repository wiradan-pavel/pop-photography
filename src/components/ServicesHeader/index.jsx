import { SectionHeader } from '../elements';
import { servicesHeader } from '../../data/services.data';
import { lineYellow273Dec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function ServicesHeader() {
  return (
    <SectionHeader imgUrl={servicesHeader.imgUrl}>
      <h3 className={style.titleHeader}>
        {servicesHeader.title}{' '}
        <img className={style.titleHeader__line} src={lineYellow273Dec} alt="" />
      </h3>
    </SectionHeader>
  );
}
