import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash';
import BottomNavigation from './BottomNavigation';
import {NavigationContainer} from '@react-navigation/native';
import useTheme from '../hooks/useTheme';
import {useEffect} from 'react';
import {getStorage} from '../utils/storage';
import {useAppDispatch} from '../hooks/useStore';
import {setIsDark} from '../featutes/darkMode/darkMode';
import { RootStackParamList } from '../@types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const {colors} = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const darkMode = await getStorage('darkMode');
    dispatch(setIsDark(darkMode));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: colors.font,
          headerStyle: {
            backgroundColor: colors.background,
            borderBottomWidth: 0.5,
            borderBottomColor: colors.border,
          },
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
