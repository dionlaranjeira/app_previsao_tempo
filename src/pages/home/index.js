import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import API from '../../service/api';
import CardInfors from '../../components/CardInfors';

export default function Home() {
  const [cityName, setCityName] = useState('');
  const [citys, setCitys] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [showForecast, setShowForecast] = useState(false);

  function haveForecast() {
    if (forecast) {
      setShowForecast(true);
    } else {
      setShowForecast(false);
    }
  }

  async function getCitys(cidade) {
    const response = await API.getCityByName(cidade);
    setCitys(response);
    console.warn(citys);
  }

  async function getForecast(idCidade) {
    setSelectedId(idCidade);
    const response = await API.getForecastById(idCidade);
    setForecast(response);
    haveForecast();
  }

  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>
        {item.name} {item.country}
      </Text>
    </TouchableOpacity>
  );

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        // onPress={() => setSelectedId(item.id)}
        onPress={() => getForecast(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  function teste() {
    console.warn('Clicado!');
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Image style={{width:"100%", height:"100%"}} source={require('../../assets/logo_linux_fundo.jpeg')} /> */}
      <View style={styles.leftConteiner}>
        <Text style={styles.textWelcome}  >Seja Bem Vindo</Text>
        <Text style={styles.textSelectCity}  >Selecione uma cidade</Text>
      <View style={styles.conteinerFindCity}>
        <TextInput
          style={styles.fildFindCity}
          onChangeText={setCityName}
          value={cityName}
          placeholder="Pesquise por uma cidade"
          placeholderTextColor="#fff"
        />
        <Icon
          name="search"
          onPress={() => getCitys(cityName)}
          color="#fff"
          size={24}
          style={styles.iconSeach}
        />
      </View>

      {/* <FlatList
        data={citys}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      /> */}

        
          <Text style={styles.textForecastWeek} >Previsão para a semana</Text>

        <View style={styles.containerCards} >
          <CardInfors />
          <CardInfors />
          <CardInfors />
          <CardInfors />
        </View>

        <View style={styles.containerCards} >
          <CardInfors />
          <CardInfors />
          <CardInfors />
        </View>

      </View>
      <View style={styles.rightConteiner}>
        <Text  >RIGHT CONTEINER</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 10,
    padding: 8,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#503268',
  },

  leftConteiner:{
    marginTop: 8,
    marginBottom: 8,
    flex:7,
    marginRight: 32,

  },

  textWelcome:{
    marginTop: 16,
    color: "#fff",
  },

  textSelectCity:{
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  textForecastWeek:{
    color:"#fff",
    fontWeight: "bold",
    fontSize: 8,
  },

  containerCards:{
    flexDirection: 'row',
  },

  rightConteiner:{
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: "#fff",
    flex: 3,
    height: "95%",
    borderRadius: 16,
    padding:16,
  },

  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

  conteinerFindCity: {
    marginTop: 8,
    marginBottom: 16,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
  },

  fildFindCity: {
    color: '#fff',
    padding: 8,
  },
  iconSeach: {
    marginRight: 8,
  },
});
