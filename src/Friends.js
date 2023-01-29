import { FriendCard } from "FriendCard";
export const FriendList = ({ friends }) => {
    return (<>{
        friends.map(item => <FriendCard key={item.id} data={item} />)
    }
    </>)
}