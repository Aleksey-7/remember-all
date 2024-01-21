import { FriendItem } from 'components/FriendItem/FriendItem';
import { List, Item } from './FriendsList.styled';

export const FriendsList = ({ items }) => {
  return (
    <List>
      {items.map(item => {
        return (
          <Item key={item.id}>
            <FriendItem item={item} />
          </Item>
        );
      })}
    </List>
  );
};
