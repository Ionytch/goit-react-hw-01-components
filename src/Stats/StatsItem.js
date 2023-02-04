import { StatItemStyle } from "./Data.styled";
import { LableStatStyle } from "./Data.styled";
import { PercentStyle } from "./Data.styled";

export const StatsItem = ({ data: { label, percentage } }) => {
    return(
            <StatItemStyle>
                <LableStatStyle>{label}</LableStatStyle>
                <PercentStyle>{percentage}%</PercentStyle>
            </StatItemStyle>
           
    )
}