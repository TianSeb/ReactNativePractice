import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {Pressable, Text, View} from 'react-native';
import {RootStackParams} from '../../routes/StackNavigator';
import {useEffect} from 'react';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>;
      },
    });
  }, []);

  return (
    <View>
      <PrimaryButton
        onPress={() => navigation.navigate('Profile')}
        label="Profile"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Settings"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="Productos"
      />
    </View>
  );
};
