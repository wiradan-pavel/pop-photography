import { Link } from 'react-router-dom';
import { SectionBanner } from '../elements';
import { bannerKidsSecond } from '../../data/banners.data';
import { contactUsBtn } from '../../data/buttons.data';
import { lineYellow617Dec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function ServiceKidsBannerSecond() {
  return (
    <SectionBanner>
      <div className={style.div}>
        <h4 className={style.titleHeader}>
          {bannerKidsSecond.title1}
          <br />
          {bannerKidsSecond.title2}
          <img src={lineYellow617Dec} alt="" />
        </h4>
        <button className={style.btn}>
          <Link to={contactUsBtn.link}>{contactUsBtn.text}</Link>
        </button>
      </div>
    </SectionBanner>
  );
}
