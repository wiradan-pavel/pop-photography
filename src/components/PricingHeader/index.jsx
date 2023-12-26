import { SectionHeader } from '../elements';
import { pricingHeader } from '../../data/pricing.data';
import { lineYellow95Dec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function PricingHeader() {
  return (
    <SectionHeader imgUrl={pricingHeader.imgUrl}>
      <h3 className={style.titleHeader}>
        {pricingHeader.title}
        <img className={style.titleHeader__line} src={lineYellow95Dec} alt="" />
      </h3>
    </SectionHeader>
  );
}
