import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import color from '../utils/colors';

export default function Form(props) {
  const {setCapital, setInteres, setMeses} = props;
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          style={styles.inputForm}
          placeholder="Cantidad a pedir"
          keyboardType="numeric"
          onChange={e => setCapital(e.nativeEvent.text)}
        />
        <TextInput
          style={[styles.inputForm, styles.inputPercentage]}
          placeholder="Interes %"
          keyboardType="numeric"
          onChange={e => setInteres(e.nativeEvent.text)}
        />
      </View>
      <RNPickerSelect
        style={picketSelectStyles}
        placeholder={{
          label: 'Selecciona los plazos...',
          value: null,
        }}
        onValueChange={value => setMeses(value)}
        items={[
          {label: '3 Meses', value: 3},
          {label: '6 Meses', value: 6},
          {label: '12 Meses', value: 12},
          {label: '24 Meses', value: 24},
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: 0,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: color.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'row',
  },
  inputForm: {
    height: 50,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: color.PRIMARY_COLOR,
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: '40%',
    marginLeft: 5,
  },
});

const picketSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
    marginLeft: -5,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
  },
});
