import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {
  NavigationProp,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import {RootStackParams} from '../../routes/StackNavigator';

export const SettingsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10}}>Settings</Text>
      <PrimaryButton onPress={() => navigation.goBack()} label={'Regresar'} />
      <PrimaryButton
        onPress={() => navigation.dispatch(StackActions.popToTop)}
        label={'Home'}
      />
    </View>
  );
};
