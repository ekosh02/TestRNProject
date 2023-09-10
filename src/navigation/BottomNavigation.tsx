import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1 from '../screens/Tab1';
import Tab2 from '../screens/Tab2';
import useTheme from '../hooks/useTheme';

export type BottomStackParamList = {
  Tab1: undefined;
  Tab2: undefined;
};

const Tab = createBottomTabNavigator<BottomStackParamList>();

const BottomNavigation = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.font,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 0.5,
          borderTopColor: colors.border
        },
      }}>
      <Tab.Screen
        name="Tab1"
        component={Tab1}
        options={{tabBarLabel: 'TAB1'}}
      />
      <Tab.Screen
        name="Tab2"
        component={Tab2}
        options={{tabBarLabel: 'TAB2'}}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
