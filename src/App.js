// @flow
import { createStackNavigator } from 'react-navigation';
import News from './screens/News';

const App = createStackNavigator(
  {
    News: {
      screen: News,
    },
  }, {
    initialRouteName: 'News',
  },
);

export default App;
