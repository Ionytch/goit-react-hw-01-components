import { StatsItem } from "Stats/StatsItem";
import { StatListStyle } from "./Data.styled";
import { TitleStyle } from "./Data.styled";
import { StatisticStyle } from "./Data.styled";

export const Statistics = ({ stats }) => {
    return (<StatisticStyle> 
        <TitleStyle>UPLOAD STATS</TitleStyle>
        <StatListStyle>
        
        {
                stats.map(item =><StatsItem key={item.id} data={item} />
                )
        }
        </StatListStyle>
</StatisticStyle>
    )

}


