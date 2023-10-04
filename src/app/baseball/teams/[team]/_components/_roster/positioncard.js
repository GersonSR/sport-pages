import styles from './positioncard.module.css';

import PositionTable from './positiontable';

const PositionCard = ({ position, players }) => {
  return (
    <div className={styles["position-card"]}>
      <h3 className={styles["position-header"]}>{position}</h3>
      <PositionTable players={players} />
    </div>
  );
}

export default PositionCard;