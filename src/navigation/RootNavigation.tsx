import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash';
import BottomNavigation from './BottomNavigation';
import {NavigationContainer} from '@react-navigation/native';
import useTheme from '../hooks/useTheme';

export type RootStackParamList = {
  Splash: undefined;
  BottomNavigation: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const {colors} = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: colors.font,
          headerStyle: {
            backgroundColor: colors.background,
            borderBottomWidth: 0.5,
            borderBottomColor: colors.border
          },
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
