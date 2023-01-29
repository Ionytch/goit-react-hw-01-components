import { TransactionItem } from "TransactionItem";

export const TransactionHistory = ({items}) => {
    return (<table class="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        {
            items.map(item => <TransactionItem key={item.id} data={item} />)
        }
    </table>
    )
}
