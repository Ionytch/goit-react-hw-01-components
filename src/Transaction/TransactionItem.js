import { TdStyle } from "./Transaction.styled";
import { TbodyStyle } from "./Transaction.styled";
import { TrStyle } from "./Transaction.styled";

export const TransactionItem = ({ data: { type, amount, currency } }) => {
    return <TbodyStyle>
            <TrStyle>
                <TdStyle>{type}</TdStyle>
                <TdStyle>{amount}</TdStyle>
                <TdStyle>{currency}</TdStyle>
            </TrStyle>
        </TbodyStyle>
    
}
    