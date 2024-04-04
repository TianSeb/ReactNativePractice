import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import {View} from 'react-native';

export const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View>
      <PrimaryButton 
        onPress={ () => navigation.navigate('Profile' as never) }
        label="Profile"
      />
      <PrimaryButton 
        onPress={ () => navigation.navigate('Settings' as never) }
        label="Settings"
      />
      <PrimaryButton 
        onPress={ () => navigation.navigate('Products' as never) }
        label="Productos"
      />
    </View>
  );
};
