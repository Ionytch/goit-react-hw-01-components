import { Profile } from 'User/User';
import user from '../user.json';
import data from '../data.json';
import { Statistics } from 'Stats/Data';
import friends from "../friends.json";
import { FriendList } from 'Friend/Friends';
import transactions from "../transactions.json";
import { TransactionHistory } from 'Transaction/Transaction';
import { FriendsListStyle } from 'Friend/Friends.styled';

export const App = () => {
  return (
    <FriendsListStyle
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </FriendsListStyle>

  );
};
