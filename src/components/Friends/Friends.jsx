import { FriendListItem } from "./FriendsItem";
import css from './FriendList.module.css';


export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(item => (
        <FriendListItem key={item.id} friend={item} />
      ))}
    </ul>
  );
};