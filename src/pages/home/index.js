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
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import API from '../../service/api';
import CardInfors from '../../components/CardInfors';
import CardInforFull from '../../components/CardInforFull';
import ModalLoad from '../../components/ModalLoad';
import ModalSelectCity from '../../components/ModalSelectCity';

export default function Home() {
  const [cityName, setCityName] = useState('');
  const [citys, setCitys] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [showForecast, setShowForecast] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModalCitys, setShowModalCitys] = useState(false);
  const [showModalForecast, setShowModalForecast] = useState(false);
  const [daySelect, setDaySelect] = useState(0);

  async function getCitys(cidade) {
    setLoading(true);
    const response = await API.getCityByName(cidade);
    setCitys(response);
    console.warn(citys);
    setLoading(false);
    if (citys) {
      setShowModalCitys(true);
    }
  }

  

  async function getForecast(idCidade) {
    // console.warn('ID CIDADE!!!' + idCidade);
    setShowModalForecast(true);
    setSelectedId(idCidade);
    const response = await API.getForecastById(idCidade);
    setForecast(response);
    console.warn('FORECAST-->' + forecast);
    setShowModalCitys(false);
    setShowModalForecast(false);
    console.warn(forecast[0]);
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

  function showCardInfo (forecast) {
    if(forecast){
      return true;
    }else{
      return false;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Image style={{width:"100%", height:"100%"}} source={require('../../assets/logo_linux_fundo.jpeg')} /> */}
      <View style={styles.leftConteiner}>
        <Text style={styles.textWelcome}>Seja Bem Vindo!</Text>
        <Text style={styles.textSelectCity}>Selecione uma cidade</Text>
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
        {showCardInfo(forecast[0]) &&
        (<Text style={styles.textForecastWeek}>Previsão para a semana:</Text>)}

        <View style={styles.containerCards}>
          
        { showCardInfo(forecast[2]) && (<CardInfors data={forecast[0]} />)}
        { showCardInfo(forecast[2]) && (<CardInfors data={forecast[1]} />)}
          { showCardInfo(forecast[2]) && (<CardInfors data={forecast[2]} />)}
        </View>

        <View style={styles.containerCards}>
        { showCardInfo(forecast[3]) && (<CardInfors data={forecast[3]} />)}
          { showCardInfo(forecast[4]) && (<CardInfors data={forecast[4]} />)}
          { showCardInfo(forecast[5]) && (<CardInfors data={forecast[5]} />)}
        </View>
      </View>
      <CardInforFull data={forecast[daySelect]} />
      <ModalLoad
        onRequestClose={() => setShowModalForecast(false)}
        visible={showModalForecast}
        haveForecast={true}
      />
      <ModalLoad onRequestClose={() => setLoading(false)} visible={loading} />
      <ModalSelectCity
        title="Selecione a cidade"
        onRequestClose={() => setShowModalCitys(false)}
        visible={showModalCitys}
        data={citys}
        onPressAction={item => getForecast(item.id)}
      />
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
    backgroundColor: '#503268',
  },

  leftConteiner: {
    marginTop: 8,
    marginBottom: 8,
    flex: 7,
    marginRight: 32,
  },

  textWelcome: {
    marginTop: 16,
    color: '#fff',
  },

  textSelectCity: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  textForecastWeek: {
    color: '#fff',
    marginBottom: 4,
    fontWeight: 'bold',
    fontSize: 8,
  },

  containerCards: {
    flexDirection: 'row',
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
    marginBottom: 8,
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
