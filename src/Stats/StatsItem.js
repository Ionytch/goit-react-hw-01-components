import { StatItemStyle } from "./Data.styled";
import { LableStatStyle } from "./Data.styled";
import { PercentStyle } from "./Data.styled";
import PropTypes from "prop-types";

export const StatsItem = ({ data: { label, percentage } }) => {
    return(
            <StatItemStyle>
                <LableStatStyle>{label}</LableStatStyle>
                <PercentStyle>{percentage}%</PercentStyle>
            </StatItemStyle>
           
    )
}

StatsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage:PropTypes.number.isRequired,
    };