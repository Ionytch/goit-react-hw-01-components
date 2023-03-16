import { FriendCardItem } from "./FriendCard.styled";
import { NameStyle } from "./FriendCard.styled";
import { StatusStyle } from "./FriendCard.styled";
import PropTypes from "prop-types";

export const FriendCard = ({ data: { avatar, name, isOnline } }) => {
    return (
  <FriendCardItem>
  <StatusStyle>{isOnline===true?"In":"Out"}</StatusStyle>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <NameStyle>{name}</NameStyle>
  </FriendCardItem>
      
    )
}

FriendCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar:PropTypes.object,
  isOnline: PropTypes.bool.isRequired,
  };