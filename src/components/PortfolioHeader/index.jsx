import { SectionHeader } from '../elements';
import { portfolioHeader } from '../../data/portfolio.data';
import { lineYellow95Dec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function PortfolioHeader() {
  return (
    <SectionHeader imgUrl={portfolioHeader.imgUrl}>
      <h3 className={style.titleHeader}>
        {portfolioHeader.title}
        <img className={style.titleHeader__line} src={lineYellow95Dec} alt="" />
      </h3>
    </SectionHeader>
  );
}
