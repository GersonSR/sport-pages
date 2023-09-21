import Image from 'next/image';
import Link from 'next/link';

const SportsGrid = () => {
  return (
    <div className="sports-grid">
      <div className="sports-grid__item">
          <Image
            src="/images/baseball.svg"
            width={200}
            height={100}
            alt="Baseball"
          ></Image>
          <Link href="/baseball">
            Baseball
          </Link>
      </div>
    </div>
  );
};

export default SportsGrid;