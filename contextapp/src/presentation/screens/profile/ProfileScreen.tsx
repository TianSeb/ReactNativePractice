import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config';
import {useProfileStore} from '../../store/proifle-store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>

      <Pressable 
      onPress={ () => useProfileStore.setState({ name: 'Moringo' }) }
      style={styles.primaryButton}>
        <Text>Cambiar Nombre</Text>
      </Pressable>

      <Pressable 
      onPress={ () => useProfileStore.setState({ name: 'doberman@dob.com' }) }
      style={styles.primaryButton}>
        <Text>Cambiar Email</Text>
      </Pressable>

      <Pressable 
      onPress={ () => changeProfile('Señor Marshant', 'traitor@larshan.com')}
      style={styles.primaryButton}>
        <Text>Cambiar a marshan</Text>
      </Pressable>
    </View>
  );
};
