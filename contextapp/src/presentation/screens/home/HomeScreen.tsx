import {Text, View} from 'react-native';
import {styles} from '../../../config';
import {useProfileStore} from '../../store/proifle-store';
import { useCounterStore } from '../../store/counter-store';

export const HomeScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const counter = useCounterStore(state => state.count)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>
      <Text style={styles.title}>Count: {counter} </Text>
    </View>
  );
};
