import { creatAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import Home from './src/components/Home';
import Profile from './src/components/Profile';

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile }
});

export default createAppContainer(MainNavigator);
