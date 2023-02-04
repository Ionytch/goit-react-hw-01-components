import { FriendCard } from "Friend/FriendCard";
import { FriendsListStyle } from "./Friends.styled";
import { ListFriend } from "./Friends.styled";

export const FriendList = ({ friends }) => {
    return (
        <FriendsListStyle>
            <ListFriend>
            {friends.map(item => <FriendCard key={item.id} data={item} />)}
            </ListFriend>
        </FriendsListStyle>
    )
}