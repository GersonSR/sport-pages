import styles from "./playercontainer.module.css"

const PlayerContainer = (props) => {
  return (
    <div className={styles["player-container"]}>{props.children}</div>
  );
};

export default PlayerContainer;