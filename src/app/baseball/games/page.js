
import ScoreTable from '../_components/scoretable/scoretable';
import styles from './page.module.css';

const GamesPage = () => {
  return (
    <main className={styles["games-main-container"]}> 
      <h3>This will feature the schedule for leagues eventually!</h3>
      <ScoreTable league="MLB" date="06-06-2016" verbosity="expanded"/> 
    </main>
  );
}

export default GamesPage;