import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash';
import BottomNavigation from './BottomNavigation';
import {NavigationContainer} from '@react-navigation/native';

import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {useSelector} from 'react-redux';
import { useAppSelector } from '../hooks/useStore';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined,
  BottomNavigation: undefined,
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const isDark = useAppSelector(state => {
    return state.darkMode.value;
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
