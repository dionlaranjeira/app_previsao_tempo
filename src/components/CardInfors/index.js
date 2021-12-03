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
    width: '24%',
    marginBottom: 8,
    marginRight: 8,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 16,
  },

  textDay: {
    color: '#fff',
    fontSize: 8,
    opacity: 0.4,
  },

  textInfor: {
    color: '#fff',
    fontSize: 8,
    opacity: 0.4,
  },
  textInforTemp: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  lineTop: {
    marginBottom: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  lineOrange: {
    position: 'absolute',
    width: '30%',
    height: 4,
    borderRadius: 1,
    backgroundColor: '#fe6e00',
    left: 20,
    bottom: -2,
  },
});
