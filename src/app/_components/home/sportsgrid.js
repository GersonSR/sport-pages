import Image from 'next/image';
import Link from 'next/link';

import style from './sportsgrid.module.css';

const SportsGrid = () => {
  return (
    <div className={style["sports-grid"]}>
      <div className={style["sports-grid__item"]}>
          <Link href="/baseball">
            <Image
              src="/images/baseball.svg"
              width={200}
              height={100}
              alt="Baseball"
            ></Image>
            Baseball
          </Link>
      </div>
    </div>
  );
};

export default SportsGrid;