import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const CardInfors = ({data}) => {
  const _01d = require('../../assets/images/01d.png');
  const _02d = require('../../assets/images/02d.png');
  const _03d = require('../../assets/images/03d.png');
  const _04d = require('../../assets/images/04d.png');
  const _09d = require('../../assets/images/09d.png');
  const _10d = require('../../assets/images/10d.png');
  const _11d = require('../../assets/images/11d.png');
  const _13d = require('../../assets/images/13d.png');
  const _50d = require('../../assets/images/50d.png');
  const _01n = require('../../assets/images/01n.png');
  const _02n = require('../../assets/images/02n.png');
  const _03n = require('../../assets/images/03n.png');
  const _04n = require('../../assets/images/04n.png');
  const _09n = require('../../assets/images/09n.png');
  const _10n = require('../../assets/images/10n.png');
  const _11n = require('../../assets/images/11n.png');
  const _13n = require('../../assets/images/13n.png');
  const _50n = require('../../assets/images/50n.png');

  const [icon, setIcon] = useState(null);

  useEffect(() => {
    if (data?.icon === '01d') {
      setIcon(_01d);
    } else if (data?.icon === '02d') {
      setIcon(_02d);
    } else if (data?.icon === '03d') {
      setIcon(_03d);
    } else if (data?.icon === '04d') {
      setIcon(_04d);
    } else if (data?.icon === '09d') {
      setIcon(_09d);
    } else if (data?.icon === '10d') {
      setIcon(_10d);
    } else if (data?.icon === '11d') {
      setIcon(_11d);
    } else if (data?.icon === '13d') {
      setIcon(_13d);
    } else if (data?.icon === '50d') {
      setIcon(_50d);
    } else if (data?.icon === '01n') {
      setIcon(_01n);
    } else if (data?.icon === '02n') {
      setIcon(_02n);
    } else if (data?.icon === '03n') {
      setIcon(_03n);
    } else if (data?.icon === '04n') {
      setIcon(_04n);
    } else if (data?.icon === '09n') {
      setIcon(_09n);
    } else if (data?.icon === '10n') {
      setIcon(_10n);
    } else if (data?.icon === '11n') {
      setIcon(_11n);
    } else if (data?.icon === '13n') {
      setIcon(_13n);
    } else if (data?.icon === '50n') {
      setIcon(_50n);
    }
  }, [data]);

  return (
    <View style={styles.conteiner}>
      <View style={styles.lineTop}>
        <View>
          <Text>{data?.day}</Text>
          <Text style={styles.textCity}>{data?.city}</Text>
        </View>
        {/* <Icon
          name="cloud"
          onPress={() => getCitys(cityName)}
          color="#000"
          size={24}
          style={styles.iconSeach}
        /> */}
        {data?.icon && <Image source={icon} style={styles.icon} />}
      </View>
      <View style={styles.lineMiddle}>
        <Text style={styles.txtTemp}>{data?.temp.substring(0, 2)}ºC</Text>
        <Text style={styles.txtMiddle}>{data?.cloudiness}</Text>
        <Text style={styles.txtMiddle}>{data?.date}</Text>
      </View>

      <View style={styles.lineBotton}>
        <View style={styles.linebottonLeft}>
          <Text style={styles.txtBottonLeft}>Vento</Text>
          <Text style={styles.txtBottonLeft}>Nebulosidade</Text>
          <Text style={styles.txtBottonLeft}>Pressão</Text>
          <Text style={styles.txtBottonLeft}>Umidade</Text>
          <Text style={styles.txtBottonLeft}>Nascer do sol</Text>
          <Text style={styles.txtBottonLeft}>Por do sol</Text>
          <Text style={styles.txtBottonLeft}>Geo localização</Text>
        </View>
        <View style={styles.linebottonRight}>
          <Text style={styles.txtBottonRight}>{data?.wind}</Text>
          <Text style={styles.txtBottonRight}>{data?.cloudiness}</Text>
          <Text style={styles.txtBottonRight}>{data?.pressure}</Text>
          <Text style={styles.txtBottonRight}>{data?.humidity}</Text>
          <Text style={styles.txtBottonRight}>{data?.sunrise}</Text>
          <Text style={styles.txtBottonRight}>{data?.sunset}</Text>
          <Text style={styles.txtBottonRight}>{data?.coords}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 8,
    marginRight: 8,
    backgroundColor: '#fff',
    flex: 6,
    height: '95%',
    borderRadius: 16,
    padding: 16,
    paddingRight: 9,
  },

  lineTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textCity: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  lineMiddle: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  txtTemp: {
    fontSize: 38,
    fontWeight: 'bold',
  },
  txtMiddle: {
    color: '#503268',
    fontSize: 10,
  },

  lineBotton: {
    borderTopColor: '#503268',
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  txtBottonLeft: {
    color: '#503268',
    fontWeight: 'bold',
    fontSize: 10,
  },
  txtBottonRight: {
    color: '#503268',
    textAlign: 'right',
    fontSize: 10,
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: -10,
    width: 100,
    height: 100,
  },
});

export default CardInfors;
