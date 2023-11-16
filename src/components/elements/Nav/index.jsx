import { Link } from 'react-router-dom';
import style from './style.module.scss';
import arrow from '../../../assets/icons/other/arrow.svg';

export default function Nav({ list }) {
  return (
    <nav className={style.nav}>
      <ul className={style.ul}>

        {/* map nav items */}
        {list.links.map((item) => (
          <li className={style.li} key={item.id}>
            <Link className={style.link} to={item.link}>
              {item.name}
              {item.name === 'Services' && <img src={arrow} alt="arrow" />}
            </Link>
            {item.name === 'Services' && (
              <ul className={style.ul__services}>

                {/* map service items */}
                {list.linksServices.map((item) => (
                  <li className={style.li__services} key={item.id}>
                    <Link className={style.link__services} to={item.link}>
                      {item.name}
                    </Link>
                  </li>
                ))}

              </ul>
            )}
          </li>
        ))}
        
      </ul>
    </nav>
  );
}
