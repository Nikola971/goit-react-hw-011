import css from './FriendListItem.module.css';
export const FriendListItem = ({ friend }) => {
  return (
    <li className={css.item}>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={friend.isOnline ? css.statusOnline : css.statusOffline}>{friend.name}</p>
    </li>
  );
};
