
import FriendListItem from '../Friends/FriendListItem';

export default function Friends({friends}) {
    return (
      <ul>
        {friends.map((item) => (
          <li key={item.id}>
                <FriendListItem friend={item} />
          </li>
        ))}
      </ul>
    );
} 