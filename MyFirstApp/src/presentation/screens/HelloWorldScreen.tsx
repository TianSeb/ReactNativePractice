import {StyleSheet, Text, View} from 'react-native';

export const HelloWorldScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HelloWorldScreen</Text>
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
    fontSize: 45,
    textAlign: 'center',
    padding: 20,
  },
});
