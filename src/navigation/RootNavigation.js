import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash';
import BottomNavigation from './BottomNavigation';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default RootNavigation;
