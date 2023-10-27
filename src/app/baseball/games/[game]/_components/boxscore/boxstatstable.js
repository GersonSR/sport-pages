
const StatsTable = ({ stats, order }) => {
    return (
        <table>
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
                                        if (stat === "namefield") {
                                            console.log(info);
                                        }
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

            </tfoot>
        </table>
    );
}

export default StatsTable;