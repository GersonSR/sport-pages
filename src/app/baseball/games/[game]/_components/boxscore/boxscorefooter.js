import { useContext } from 'react';

import { GameContext } from '../../layout';

import styles from './boxscorefooter.module.css';

const BoxScoreFooter = () => {
    const { game, loading, error } = useContext(GameContext);

    if (loading) return (<div>Loading...</div>)

    if (game === null)
        return (<div className="boxscore-footer">

        </div>);

    const footerInfo = game["gameBoxInfo"]
    const footerKeys = Object.keys(footerInfo);

    return (
        <div className="boxscore-footer">
            <h3 className={styles["boxscore-footer-title"]}>General Game Info</h3>
            {
                footerKeys.map((key, index) => {
                    let lable = key;
                    if (key === footerInfo[key]) {
                        lable = "Date"
                    }
                    if (key === "Att") {
                        lable = "Attendance"
                    }
                    return (
                        <div key={index} className={styles["boxscore-footer-item"]}>
                            <div className={styles["boxscore-footer-item-lable"]}>{lable}:</div>
                            <div className={styles["boxscore-footer-item-value"]}>{footerInfo[key]}</div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default BoxScoreFooter;