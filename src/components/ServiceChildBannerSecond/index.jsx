import { Link } from 'react-router-dom';
import { SectionBanner } from '../elements';
import { bannerChildSecond } from '../../data/banners.data';
import { contactUsBtn } from '../../data/buttons.data';
import { lineYellow164Dec } from '../../data/decoration.img';
import checkMarkImg from '../../assets/icons/checkmark.svg';

import style from './style.module.scss';

export default function ServiceChildBannerSecond() {
  return (
    <SectionBanner>
      <div className={style.top}>
        <div className={style.top__content}>
          <h4 className={style.titleHeader}>
            {bannerChildSecond.title}
            <img src={lineYellow164Dec} alt="" />
          </h4>
          <p>{bannerChildSecond.text}</p>
        </div>
        <button className={style.btn}>
          <Link to={contactUsBtn.link}>{contactUsBtn.text}</Link>
        </button>
      </div>
      <div className={style.list}>
        {bannerChildSecond.list.map((item, index) => (
          <div className={style.list__item} key={index}>
            <img src={checkMarkImg} alt="" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </SectionBanner>
  );
}
