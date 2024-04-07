import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from '../../config';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    sceneContainerStyle={{
      backgroundColor: 'lightgray',
    }}
    screenOptions={{
      tabBarActiveTintColor: 'blue',
      tabBarLabelStyle: {
        marginBottom: 5,
      },
      headerStyle: {
        elevation: 0,
        borderColor: 'transparent',
        shadowColor: 'transparent'
      },
      tabBarStyle: {
        borderTopWidth: 0,
        elevation: 0
      }
    }}
    >
      <Tab.Screen 
        name="HomeScreen"
        component={ HomeScreen } />
      <Tab.Screen 
        name="ProfileScreen"
        component={ ProfileScreen } />
      <Tab.Screen 
        name="SettingsScreen"
        component={ SettingsScreen } />

    </Tab.Navigator>
  );
};