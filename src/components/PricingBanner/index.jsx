import { Link } from 'react-router-dom';
import { SectionBanner } from '../elements';
import { bannerKidsFirst } from '../../data/banners.data';
import { contactUsBtn } from '../../data/buttons.data';
import { lineYellow416Dec, quotesClose, quotesOpen } from '../../data/decoration.img';

import style from './style.module.scss';

export default function PricingBanner() {
  return (
    <SectionBanner isStyleOne>
      <div className={style.flex}>
        <h4 className={style.titleHeader}>
          {bannerKidsFirst.title}
          <img className={style.quotes__open} src={quotesOpen} alt="" />
          <img className={style.quotes__close} src={quotesClose} alt="" />
          <img className={style.line} src={lineYellow416Dec} alt="" />
        </h4>
        <button className={style.btn}>
          <Link to={contactUsBtn.link}>{contactUsBtn.text}</Link>
        </button>
      </div>
    </SectionBanner>
  );
}
