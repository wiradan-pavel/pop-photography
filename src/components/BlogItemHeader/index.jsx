import { SectionHeader } from '../elements';
import { blogItemData } from '../../data/blog.data';
import { lineYellow95Dec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function BlogItemHeader() {
  return (
    <SectionHeader imgUrl={blogItemData.imgUrl}>
      <h3 className={style.titleHeader}>
        {blogItemData.titleHeader}
        <img className={style.titleHeader__line} src={lineYellow95Dec} alt="" />
      </h3>
    </SectionHeader>
  );
}
