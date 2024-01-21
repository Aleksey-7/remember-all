import { FriendsList } from './FriendsList/FriendsList';
import friends from '../data/friends.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <FriendsList items={friends} />
      <GlobalStyle />
    </Layout>
  );
};
