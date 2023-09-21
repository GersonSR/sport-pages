import Link from 'next/link';

const SportsGrid = () => {
  return (
    <div className="sports-grid">
      <div className="sports-grid__item">
        <p>
          <Link href="/baseball">
            Baseball
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SportsGrid;