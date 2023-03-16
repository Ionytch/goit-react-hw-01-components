import { StatsItem } from "Stats/StatsItem";
import { StatListStyle } from "./Data.styled";
import { TitleStyle } from "./Data.styled";
import { StatisticStyle } from "./Data.styled";
import PropTypes from "prop-types";

export const Statistics = ({title, stats }) => {
    return (<StatisticStyle> 
      <TitleStyle> { title}</TitleStyle>
        <StatListStyle>
        
        {
                stats.map(item =><StatsItem key={item.id} data={item} />
                )
        }
        </StatListStyle>
</StatisticStyle>
    )

}


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.string.isRequired,
    };