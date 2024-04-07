import {Pressable, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../../../config';
import { useCounterStore } from '../../store/counter-store';
import { useEffect } from 'react';

export const SettingsScreen = () => {

  const counter = useCounterStore(state => state.count)
  const increment = useCounterStore(state => state.inc)

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `SettingsScreen: ${counter}`
    })
  
    return () => {
      
    }
  }, [counter])
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count: {counter} </Text>

      <Pressable 
      onPress={ () => increment(1)}
      style={styles.primaryButton}>
        <Text>+1</Text>
      </Pressable>

      <Pressable 
      onPress={ () => increment(-1)}
      style={styles.primaryButton}>
        <Text>-1</Text>
      </Pressable>
    </View>
  );
};
