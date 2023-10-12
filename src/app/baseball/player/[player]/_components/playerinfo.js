import styles from "./playerinfo.module.css";

const PlayerInfo = ({ player }) => {
  const playerInfo = player.people[0];

  return (
    <div className={styles["player-info-container"]}>
      <div className={styles["player-name"]}>
        <h2>{playerInfo.firstLastName}</h2>
      </div>
      <div className={styles["player-rundown"]}>
        <div className={styles["player-rundown_item"]}>
          <div className={styles["player-rundown_item__name"]}>Player Full Name:</div>
          <div className={styles["player-rundown_item__value"]}>{playerInfo.fullFMLName}</div>
        </div>
        <div className={styles["player-rundown_item"]}>
          <div className={styles["player-rundown_item__name"]}>Active:</div>
          <div className={styles["player-rundown_item__value"]}>{playerInfo.active ? "Yes" : "No"}</div>
        </div>
        <div className={styles["player-rundown_item"]}>
          <div className={styles["player-rundown_item__name"]}>Birth Date:</div>
          <div className={styles["player-rundown_item__value"]}>{playerInfo.birthDate}</div>
        </div>
        <div className={styles["player-rundown_item"]}>
          <div className={styles["player-rundown_item__name"]}>Hometown:</div>
          <div className={styles["player-rundown_item__value"]}>{`${playerInfo.birthCity}, ${playerInfo.birthStateProvince}, ${playerInfo.birthCountry}`}</div>
        </div>
        <div className={styles["player-rundown_item"]}>
          <div className={styles["player-rundown_item__name"]}>Age:</div>
          <div className={styles["player-rundown_item__value"]}>{playerInfo.currentAge}</div>
        </div>
        <div className={styles["player-rundown_item"]}>
          <div className={styles["player-rundown_item__name"]}>Height:</div>
          <div className={styles["player-rundown_item__value"]}>{playerInfo.height}</div>
        </div>
        <div className={styles["player-rundown_item"]}>
          <div className={styles["player-rundown_item__name"]}>Weight:</div>
          <div className={styles["player-rundown_item__value"]}>{playerInfo.weight}</div>
        </div>
        <div className={styles["player-rundown_item"]}>
          <div className={styles["player-rundown_item__name"]}>Draft Year:</div>
          <div className={styles["player-rundown_item__value"]}>{playerInfo.draftYear}</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;