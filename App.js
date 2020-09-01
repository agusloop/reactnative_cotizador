import React, {Fragment, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  YellowBox,
} from 'react-native';
import colors from './src/utils/colors';
import Formulario from './src/components/Form';
import Footer from './src/components/Footer';
import ResultCalculation from './src/components/ResultCalculation';
YellowBox.ignoreWarnings(['Picker has been extracted']);
export default function App() {
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [meses, setMeses] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  //? usamos el useEffect para que lo haga sin apretar el boton calcular
  useEffect(() => {
    if (capital && interes && meses) {
      calcular();
    } else {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [capital, interes, meses]);

  const calcular = () => {
    reset();
    if (!capital) {
      setErrorMessage('Añande una cantidad');
    } else if (!interes) {
      setErrorMessage('Añande el interes');
    } else if (!meses) {
      setErrorMessage('Selecciona los meses');
    } else {
      const i = interes / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -meses)) / i);
      //* el to fixed reduce el numero de decimales

      setTotal({
        mesesFee: fee.toFixed(2).replace('.', ','),
        totalPay: (fee * meses).toFixed(2).replace('.', ','),
      });
    }
  };

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };

  return (
    <Fragment>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.PRIMARY_COLOR}
      />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
        <Formulario
          setCapital={setCapital}
          setInteres={setInteres}
          setMeses={setMeses}
        />
      </SafeAreaView>

      <ResultCalculation
        capital={capital}
        interes={interes}
        meses={meses}
        total={total}
        errorMessage={errorMessage}
      />

      <Footer calcular={calcular} />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 200,
    width: '100%',
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 15,
  },
});
