import user from '../data/user.json';
import friends from '../data/friends.json';
import items from '../data/transacthions.json';

import { FriendList } from './Friends/Friends';
import { Profile } from './Profile/Profile';
import { TransactionHistory } from './TransactionHistory/Transactions';

const rootStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
};

export const App = () => {
  return (
    <div style={rootStyles}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};
