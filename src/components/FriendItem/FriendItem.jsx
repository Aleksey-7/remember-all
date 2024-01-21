import { Image, Title, Status } from './FriendItem.styled';

export const FriendItem = ({ item: { avatar, name, isOnline } }) => {
  return (
    <div>
      <Image src={avatar} alt={name} width="120" />
      <Title>{name}</Title>
      <Status isOnline={isOnline}></Status>
    </div>
  );
};
