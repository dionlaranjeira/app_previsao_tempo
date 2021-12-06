import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {View, Text, StyleSheet} from 'react-native';

const CardInfors = ({data}) => {
  // const data = {
  //   temp: '25.27ºC',
  //   wind: 'Brisa leve, 6.23 km/h, Leste (79)',
  //   cloudiness: 'Brisa leve',
  //   pressure: '1011 hpa',
  //   humidity: '100%',
  //   sunrise: '05:42',
  //   sunset: '18:00',
  //   icon: '10d',
  //   date: '6 de Dezembro',
  //   clouds: '75%',
  //   wind_speed: '6.23 km/h',
  //   coords: '-3.1019, -60.025',
  //   day: 'SEG',
  // };

  return (
    <View style={styles.container}>
      <View style={styles.lineTop}>
        <Icon name="cloud" color="#fff" size={24} />
        <Text style={styles.textDay}>{data?.day}</Text>
      </View>
      <View>
        <Text style={styles.textInforTemp}>{data?.temp}</Text>
        <Text style={styles.textInfor}>{data?.wind_speed}</Text>
        <Text style={styles.textInfor}>Nuvens: {data?.clouds}</Text>
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
