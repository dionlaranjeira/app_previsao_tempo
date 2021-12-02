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
import {InputFindCity} from '../../components/InputFindCity';
import API from '../../service/api';

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

      <TextInput
        style={styles.fildFindCity}
        onChangeText={setCityName}
        value={cityName}
        placeholder="Pesquise por uma cidade"
        placeholderTextColor="#fff"
      />

      <Button
        style={styles.btnFind}
        onPress={() => getCitys(cityName)}
        title="Pesquisar"
        color="#841584"
        accessibilityLabel="Pesquise por uma cidade"
      />

      <FlatList
        data={citys}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />

      {showForecast && (
        <>
          <Text>Previsão para a semana</Text>
          <View>
            <Text>Icone clima </Text>
            <Text>Dia </Text>
            <Text>Temperatura</Text>
            <Text>Vento </Text>
            <Text>clouds 33% </Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#841584',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

  fildFindCity: {
    marginBottom: 16,
    borderColor: '#fff',
    borderWidth: 1,
    color: '#fff',
    borderRadius: 8,
    padding: 8,
  },
  btnFind: {
    backgroundColor: '#f00',
  },
});
