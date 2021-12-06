import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CardInfors = ({data, onPressAction, selected}) => {
  return (
    <TouchableOpacity style={selected? styles.containerSelected: styles.container} 
    onPress={() => onPressAction()}>
    
      <View style={styles.lineTop}>
        <Icon name="cloud" color="#fff" size={24} />
        <Text style={styles.textDay}>{data?.day}</Text>
      </View>
      <View>
        <Text style={styles.textInforTemp}>{data?.temp}</Text>
        <Text style={styles.textInfor}>{data?.wind_speed}</Text>
        <Text style={styles.textInfor}>Nuvens: {data?.clouds}</Text>
      </View>
      { selected && (<View style={styles.lineOrangeSelected} />)}
      { !selected && (<View style={styles.lineOrange} />)}
  
    </TouchableOpacity>
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

  containerSelected: {
    justifyContent: 'space-between',
    padding: 8,
    width: '24%',
    marginBottom: 8,
    marginRight: 8,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: "#372445",
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
  lineOrangeSelected: {
    position: 'absolute',
    width: '70%',
    height: 4,
    borderRadius: 1,
    backgroundColor: '#febb00',
    left: 20,
    bottom: -2,
  },
});
