import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import color from '../utils/colors';
import {Icon} from 'react-native-elements';

//? para cargar los iconos es necesario hacer un ajuste en
//* android\app\build.gradle
//? y pegar el comando: apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle");

export default function Footer(props) {
  const {calcular} = props;

  return (
    <View style={styles.viewFooter}>
      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.text}>Calcular</Text>
        <Icon
          style={styles.icono}
          name="dollar-bill"
          type="foundation"
          color={color.GRAY_PRIMARY}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewFooter: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: color.PRIMARY_COLOR,
    height: 90,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
  icono: {
    marginLeft: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 25,
    backgroundColor: color.PRIMARY_COLOR_DARK,
    padding: 16,
    borderRadius: 25,
    width: '75%',
  },
});
