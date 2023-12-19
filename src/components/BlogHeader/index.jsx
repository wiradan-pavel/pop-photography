import { SectionHeader } from '../elements';
import { blogHeader } from '../../data/blog.data';
import { lineYellow95Dec } from '../../data/decoration.img';

import style from './style.module.scss';

export default function BlogHeader() {
  return (
    <SectionHeader imgUrl={blogHeader.imgUrl}>
      <h3 className={style.titleHeader}>
        {blogHeader.title}
        <img className={style.titleHeader__line} src={lineYellow95Dec} alt="" />
      </h3>
    </SectionHeader>
  );
}
