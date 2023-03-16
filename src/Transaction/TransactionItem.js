import { TdStyle } from "./Transaction.styled";
import { TbodyStyle } from "./Transaction.styled";
import { TrStyle } from "./Transaction.styled";
import PropTypes from "prop-types";

export const TransactionItem = ({ data: { type, amount, currency } }) => {
    return <TbodyStyle>
            <TrStyle>
                <TdStyle>{type}</TdStyle>
                <TdStyle>{amount}</TdStyle>
                <TdStyle>{currency}</TdStyle>
            </TrStyle>
        </TbodyStyle>
    
}
    
TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  };