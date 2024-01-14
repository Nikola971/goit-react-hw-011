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
      <p >
        {friend.name}{' '}
        <span className={friend.isOnline ? css.statusOnline : css.statusOffline}>
          {friend.isOnline ? 'Online' : 'Offline'}
        </span>
      </p>
    </li>
  );
};
