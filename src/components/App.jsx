import { Profile } from './profile/Profile';
import { FriendList } from './friendList/FriendList';
import { Statistics } from './statistics/Statistics';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import user from './data/user';
import data from './data/data';
import friends from './data/friends';
import transactions from './data/transactions';

export const App = () => {
  return (
    <div>
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
    </div>
  );
};
