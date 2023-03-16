import { FriendCard } from "Friend/FriendCard";
import { FriendsListStyle } from "./Friends.styled";
import { ListFriend } from "./Friends.styled";
import PropTypes from "prop-types";


export const FriendList = ({ friends }) => {
    return (
        <FriendsListStyle>
            <ListFriend>
            {friends.map(item => <FriendCard key={item.id} data={item} />)}
            </ListFriend>
        </FriendsListStyle>
    )
}

FriendList.propTypes = {
    friends: PropTypes.string.isRequired,
  };