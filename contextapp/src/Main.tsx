import {NavigationContainer} from '@react-navigation/native';
import { BottomTabNavigator } from './presentation/routes/BottomTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
