import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native';

const CardInfors = ({data, onPressAction, selected}) => {
  
  const _01d = require("../../assets/images/01d.png");
  const _02d = require("../../assets/images/02d.png");
  const _03d = require("../../assets/images/03d.png");
  const _04d = require("../../assets/images/04d.png");
  const _09d = require("../../assets/images/09d.png");
  const _10d = require("../../assets/images/10d.png");
  const _11d = require("../../assets/images/11d.png");
  const _13d = require("../../assets/images/13d.png");
  const _50d = require("../../assets/images/50d.png");
  const _01n = require("../../assets/images/01n.png");
  const _02n = require("../../assets/images/02n.png");
  const _03n = require("../../assets/images/03n.png");
  const _04n = require("../../assets/images/04n.png");
  const _09n = require("../../assets/images/09n.png");
  const _10n = require("../../assets/images/10n.png");
  const _11n = require("../../assets/images/11n.png");
  const _13n = require("../../assets/images/13n.png");
  const _50n = require("../../assets/images/50n.png");


  const [icon, setIcon]= useState(null);
  
  useEffect(() => {
    if(data.icon === "01d"){
      setIcon(_01d);
    }
    else if(data.icon === "02d"){
      setIcon(_02d);
    }else if(data.icon === "03d"){
      setIcon(_03d);
    }else if(data.icon === "04d"){
      setIcon(_04d);
    }else if(data.icon === "09d"){
      setIcon(_09d);
    }else if(data.icon === "10d"){
      setIcon(_10d);
    }else if(data.icon === "11d"){
      setIcon(_11d);
    }else if(data.icon === "13d"){
      setIcon(_13d);
    }else if(data.icon === "50d"){
      setIcon(_50d);
    }
    else if(data.icon === "01n"){
      setIcon(_01n);
    }
    else if(data.icon === "02n"){
      setIcon(_02n);
    }else if(data.icon === "03n"){
      setIcon(_03n);
    }else if(data.icon === "04n"){
      setIcon(_04n);
    }else if(data.icon === "09n"){
      setIcon(_09n);
    }else if(data.icon === "10n"){
      setIcon(_10n);
    }else if(data.icon === "11n"){
      setIcon(_11n);
    }else if(data.icon === "13n"){
      setIcon(_13n);
    }else if(data.icon === "50n"){
      setIcon(_50n);
    }
  }, [data]);

  return (
    <TouchableOpacity style={selected? styles.containerSelected: styles.container} 
    onPress={() => onPressAction()}>
    
      <View style={styles.lineTop}>
        { data?.icon && (<Image source={icon}
           style={{ width: 40, height: 40 }}
/>)}
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
    opacity: 0.8,
  },

  textInfor: {
    color: '#fff',
    fontSize: 8,
    opacity: 0.7,
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
