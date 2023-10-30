
import styles from './boxstatstable.module.css';

const StatsTable = ({ stats, order, totals }) => {
    return (
        <table className={styles["box-table"]}>
            <thead>
                <tr>
                    {order.map((stat, index) => {
                        let info = stats[0][stat];
                        return (
                            <th key={index}>{info}</th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {
                    stats.map((player, index) => {
                        if (index === 0){
                            return;
                        } else {
                            return (
                                <tr key={index}>
                                    {order.map((stat, index) => {
                                        let info = player[stat];
                                        // if (stat === "namefield") {
                                        //     console.log(info);
                                        // }
                                        return (
                                            <td key={index}>{info.replace(/ /g, "\u00a0")}</td>
                                        );
                                    })}
                                </tr>
                            );
                        }
                    })
                }
            </tbody>
            <tfoot>
                <tr>
                    {order.map((stat, index) => {
                        let info = totals[stat];
                        if (index === 0) {
                            info = "Totals";
                        }
                        return (
                            <th key={index}>{info}</th>
                        );
                    })}
                </tr>
            </tfoot>
        </table>
    );
}

export default StatsTable;