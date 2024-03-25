import {Text, View} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';
import {CalculatorButton} from '../components/CalculatorButton';

export const CalculatorScreen = () => {
  const printSomething = () => {
    console.log('printSomething');
  }

  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text style={styles.mainResult}>1500</Text>
        <Text style={styles.subResult}>15</Text>
      </View>

      <View style={styles.row}>
        <CalculatorButton
          onPress={printSomething}
          label="C"
          blackText
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={printSomething}
          label="+/-"
          blackText
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={printSomething}
          label="del"
          blackText
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={printSomething}
          label="÷"
          color={colors.orange}
        />
      </View>
      
    </View>
  );
};
