import styles from "./playerinfo.module.css";

const PlayerInfo = ({ player }) => {
  const playerInfo = player.people[0];

  let hometown = "";
  let homecity = "";
  let homestate = "";
  let homecountry = "";

  if (playerInfo.birthCity) {
    homecity = playerInfo.birthCity;
  }
  if (playerInfo.birthStateProvince) {
    homestate = playerInfo.birthStateProvince;
  }
  if (playerInfo.birthCountry) {
    homecountry = playerInfo.birthCountry;
  }

  hometown = homecity + "  " + homestate + "  " + homecountry;

  if (hometown === "    ") {
    hometown = "N/A";
  } else {
    hometown = hometown.trim();
    console.log(hometown);
    hometown = hometown.replace(/\s{2,}/g, ", ");
  }

  return (
    <div className={styles["player-info-container"]}>
      <div className={styles["player-name"]}>
        <h2>{playerInfo.firstLastName}</h2>
      </div>
      <div className={styles["player-rundown"]}>
        <div className={styles["player-rundown_item"]}>
          <div className={styles["player-rundown_item__name"]}>
            Player Full Name:
          </div>
          <div className={styles["player-rundown_item__value"]}>
            {playerInfo.fullFMLName ? playerInfo.fullFMLName : "N/A"}
          </div>
        </div>
        <div className={styles["player-rundown_item"]}>
          <div className={styles["player-rundown_item__name"]}>Active:</div>
          <div className={styles["player-rundown_item__value"]}>
            {playerInfo.active ? "Yes" : "No"}
          </div>
        </div>
        <div className={styles["player-rundown_item"]}>
          <div className={styles["player-rundown_item__name"]}>Birth Date:</div>
          <div className={styles["player-rundown_item__value"]}>
            {playerInfo.birthDate ? playerInfo.birthDate : "N/A"}
          </div>
        </div>
        <div className={styles["player-rundown_item"]}>
          <div className={styles["player-rundown_item__name"]}>Hometown:</div>
          <div className={styles["player-rundown_item__value"]}>
            {hometown ? hometown : "N/A"}
          </div>
        </div>
        <div className={styles["player-rundown_item"]}>
          <div className={styles["player-rundown_item__name"]}>Age:</div>
          <div className={styles["player-rundown_item__value"]}>
            {playerInfo.currentAge ? playerInfo.currentAge : "N/A"}
          </div>
        </div>
        <div className={styles["player-rundown_item"]}>
          <div className={styles["player-rundown_item__name"]}>Height:</div>
          <div className={styles["player-rundown_item__value"]}>
            {playerInfo.height ? playerInfo.height : "N/A"}
          </div>
        </div>
        <div className={styles["player-rundown_item"]}>
          <div className={styles["player-rundown_item__name"]}>Weight:</div>
          <div className={styles["player-rundown_item__value"]}>
            {playerInfo.weight ? playerInfo.weight : "N/A"}
          </div>
        </div>
        <div className={styles["player-rundown_item"]}>
          <div className={styles["player-rundown_item__name"]}>Draft Year:</div>
          <div className={styles["player-rundown_item__value"]}>
            {playerInfo.draftYear ? playerInfo.draftYear : "N/A"}
          </div>
        </div>
        <div className={styles["player-rundown_item"]}>
          <div className={styles["player-rundown_item__name"]}>
            Major League Debut:
          </div>
          <div className={styles["player-rundown_item__value"]}>
            {playerInfo.mlbDebutDate ? playerInfo.mlbDebutDate : "N/A"}
          </div>
        </div>
        <div className={styles["player-rundown_item"]}>
          <div className={styles["player-rundown_item__name"]}>
            Jersey Number:
          </div>
          <div className={styles["player-rundown_item__value"]}>
            {playerInfo.primaryNumber ? playerInfo.primaryNumber : "N/A"}
          </div>
        </div>
        <div className={styles["player-rundown_item"]}>
          <div className={styles["player-rundown_item__name"]}>
            Primary Position:
          </div>
          <div className={styles["player-rundown_item__value"]}>
            {playerInfo.primaryPosition.name &&
            playerInfo.primaryPosition.abbreviation
              ? ` ${playerInfo.primaryPosition.name} (${playerInfo.primaryPosition.abbreviation})`
              : "N/A"}
          </div>
        </div>
        <div className={styles["player-rundown_item"]}>
          <div className={styles["player-rundown_item__name"]}>
            Throwing Hand:
          </div>
          <div className={styles["player-rundown_item__value"]}>
            {playerInfo.pitchHand.description
              ? playerInfo.pitchHand.description
              : "N/A"}
          </div>
        </div>
        <div className={styles["player-rundown_item"]}>
          <div className={styles["player-rundown_item__name"]}>
            Batting Side:
          </div>
          <div className={styles["player-rundown_item__value"]}>
            {playerInfo.batSide.description
              ? playerInfo.batSide.description
              : "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
