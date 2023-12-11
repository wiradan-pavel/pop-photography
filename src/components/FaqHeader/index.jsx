import { SectionHeader } from '../elements';
import { faqHeader } from '../../data/faq.data';
import { lineYellow164Dec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function FaqHeader() {
  return (
    <SectionHeader imgUrl={faqHeader.imgUrl}>
      <h3 className={style.titleHeader}>
        {faqHeader.title}
        <img className={style.titleHeader__line} src={lineYellow164Dec} alt="" />
      </h3>
    </SectionHeader>
  );
}
