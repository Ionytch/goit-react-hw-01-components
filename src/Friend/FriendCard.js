import { FriendCardItem } from "./FriendCard.styled";
import { NameStyle } from "./FriendCard.styled";
import { StatusStyle } from "./FriendCard.styled";

export const FriendCard = ({ data: { avatar, name, isOnline } }) => {
    return (
  <FriendCardItem>
  <StatusStyle>{isOnline===true?"In":"Out"}</StatusStyle>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <NameStyle>{name}</NameStyle>
  </FriendCardItem>
      
    )
}
