import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1 from '../screens/Tab1';
import Tab2 from '../screens/Tab2';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
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
