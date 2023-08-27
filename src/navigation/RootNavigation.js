import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash';
import BottomNavigation from './BottomNavigation';
import {NavigationContainer} from '@react-navigation/native';

import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const RootNavigation = () => {
  const isDark = useSelector(state => {
    return state.dark.value;
  });

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
