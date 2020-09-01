import React, {Fragment} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ResultCalculation(props) {
  const {capital, interes, meses, total, errorMessage} = props;
  console.log(errorMessage);
  return (
    <Fragment>
      <View style={styles.content}>
        {total && (
          <View style={styles.viewTotal}>
            <Text style={styles.title}>Resumen</Text>
            <DataResult title="Cantidad Solicitad" value={`${capital} $`} />
            <DataResult title="Interes %" value={`${interes} %`} />
            <DataResult title="Plazos: " value={`${meses} meses`} />
            <DataResult title="Pago mensual:" value={`${total.mesesFee} $`} />
            <DataResult
              style={styles.totalPayload}
              title="Total a pagar:"
              value={`${total.totalPay} $`}
            />
          </View>
        )}
      </View>
      {errorMessage ? (
        <View style={styles.card}>
          <Text style={styles.error}>{errorMessage}</Text>
        </View>
      ) : null}
    </Fragment>
  );
}

function DataResult(props) {
  const {title, value} = props;
  return (
    <View style={styles.capitalSol}>
      <Text style={styles.labels}>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 2,
    marginHorizontal: 15,
  },
  error: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  capitalSol: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  labels: {
    fontWeight: '800',
  },
  card: {
    marginHorizontal: 15,
    marginTop: 15,
    width: '90%',
    borderRadius: 5,
    backgroundColor: '#F21111',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  viewTotal: {
    padding: 30,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  totalPayload: {
    fontWeight: '400',
    color: 'red',
  },
});
