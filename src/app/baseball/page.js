import Link from 'next/link';

const SportPage = () => {
  return (
    <div>
      <h1>League Page</h1>
      <p>Choose which league to view:</p>
      <ul>
        <li><Link href="/baseball/MLB">MLB</Link></li>
      </ul>
    </div>
  );
}

export default SportPage;