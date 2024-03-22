import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PrimaryButton} from '../components';
import {Button} from 'react-native-paper';

export const CounterScreen = () => {
  const [count, setcount] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      {/* <PrimaryButton
        label="Incrementar"
        onPress={() => setcount(count + 1)}
        onLongPress={() => setcount(10)}
      /> */}
      <Button
        onPress={() => setcount(count + 1)}
        onLongPress={() => setcount(0)}
        mode="contained">
        Incrementar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
});
