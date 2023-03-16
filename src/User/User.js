import { UserCard } from "./User.styled";
import { StatsStyle } from "./User.styled";
import { LabelStyle } from "./User.styled";
import { QuantityStyle } from "./User.styled";
import { StatsListStyle } from "./User.styled";
import { UserDescription } from "./User.styled";
import { UserTextStyle1 } from "./User.styled";
import { UserTextStyle2 } from "./User.styled";
import { UserImage } from "./User.styled";
import PropTypes from "prop-types";

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserCard>
      <UserDescription>
        <UserImage
          src={avatar}
          alt="User avatar"
          class="avatar"
        />
        <UserTextStyle1>{username}</UserTextStyle1>
        <UserTextStyle2>{tag}</UserTextStyle2>
        <UserTextStyle2>{location}</UserTextStyle2>
      </UserDescription>

      <StatsStyle>
        <StatsListStyle>
          <LabelStyle>Followers</LabelStyle>
          <QuantityStyle>{stats.followers}</QuantityStyle>
        </StatsListStyle>
        <StatsListStyle>
          <LabelStyle>Views</LabelStyle>
          <QuantityStyle>{stats.views}</QuantityStyle>
        </StatsListStyle>
        <StatsListStyle>
          <LabelStyle>Likes</LabelStyle>
          <QuantityStyle>{stats.likes}</QuantityStyle>
        </StatsListStyle>
      </StatsStyle>
    </UserCard>
  )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
    stats: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.object,
    tag: PropTypes.string.isRequired,
  };