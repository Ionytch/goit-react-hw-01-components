import { TransactionItem } from "Transaction/TransactionItem";
import { TableStyle } from "./Transaction.styled";
import { ThStyle } from "./Transaction.styled";
import { TheadStyle } from "./Transaction.styled";
import { TrTableStyle } from "./Transaction.styled";
import PropTypes from "prop-types";


export const TransactionHistory = ({items}) => {
    return (<TableStyle>
        <TheadStyle>
            <TrTableStyle>
                <ThStyle>TYPE</ThStyle>
                <ThStyle>AMOUNT</ThStyle>
                <ThStyle>CURRENCY</ThStyle>
            </TrTableStyle>
        </TheadStyle>
        {
            items.map(item => <TransactionItem key={item.id} data={item} />)
        }
    </TableStyle>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.string.isRequired,
  };