import { Link } from 'react-router-dom';
import { SectionBanner } from '../elements';
import { bannerChildFirst } from '../../data/banners.data';
import { contactUsBtn } from '../../data/buttons.data';

import style from './style.module.scss';
import { lineYellow416Dec, quotesClose, quotesOpen } from '../../data/decoration.img';

export default function ServicesBanner() {
  return (
    <SectionBanner isStyleOne>
      <div className={style.flex}>
        <h4 className={style.titleHeader}>
          {bannerChildFirst.title}
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
