import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {View, Text, StyleSheet} from 'react-native';

const CardInfors = () => {
  return (
    <View style={styles.container}>
      <View style={styles.lineTop}>
        <Icon name="cloud" color="#fff" size={24} />
        <Text style={styles.textDay}>SEG</Text>
      </View>
      <View>
        <Text style={styles.textInforTemp}>24.7ºC</Text>
        <Text style={styles.textInfor}>3.15 m/s</Text>
        <Text style={styles.textInfor}>Clouds: 33%</Text>
      </View>
      <View style={styles.lineOrange} />
    </View>
  );
};

export default CardInfors;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: 8,
    width: '40%',
    height: '30%',
    marginTop: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 30,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },

  textDay: {
    color: '#fff',
  },

  textInfor: {
    color: '#fff',
  },
  textInforTemp: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  lineTop: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  lineOrange: {
    position: 'absolute',
    width: '30%',
    height: 4,
    borderRadius: 1,
    backgroundColor: '#fe6e00',
    left: 30,
    bottom: -1,
  },
});
