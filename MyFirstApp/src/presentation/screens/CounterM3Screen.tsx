import {useState} from 'react';
import {globalStyles} from '../theme/global.styles';
import {Text, View} from 'react-native';
import {FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export const CounterM3Screen = () => {
  const [count, setcount] = useState(10);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      {/* <Icon name='accessibility-outline' size={25} /> */}
      <FAB
        onPress={() => setcount(count + 1)}
        onLongPress={() => setcount(0)}
        style={globalStyles.fab}
        icon='add-outline'
      />
    </View>
  );
};
