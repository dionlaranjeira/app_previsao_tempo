import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput, SafeAreaView} from 'react-native';
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
  const [loading, setLoading] = useState(false);
  const [showModalCitys, setShowModalCitys] = useState(false);
  const [showModalForecast, setShowModalForecast] = useState(false);
  const [daySelect, setDaySelect] = useState(0);

  useEffect(() => {
    // OBTEM PREVISÃO PADRÃO - BRASÍLIA
    getForecast(3469058);
  }, []);

  async function getCitys(cidade) {
    setLoading(true);
    const response = await API.getCityByName(cidade);
    setCitys(response);
    setLoading(false);
    if (citys) {
      setShowModalCitys(true);
    }
  }

  function cardSelect(index) {
    if (index === daySelect) {
      return true;
    } else {
      return false;
    }
  }

  async function getForecast(idCidade) {
    setShowModalForecast(true);
    setSelectedId(idCidade);
    const response = await API.getForecastById(idCidade);
    setForecast(response);
    setShowModalCitys(false);
    setShowModalForecast(false);
  }

  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>
        {item.name} {item.country}
      </Text>
    </TouchableOpacity>
  );

  const [selectedId, setSelectedId] = useState(null);

  function showCardInfo(forecast) {
    if (forecast) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
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
        {showCardInfo(forecast[0]) && (
          <Text style={styles.textForecastWeek}>Previsão para a semana:</Text>
        )}

        <View style={styles.containerCards}>
          {showCardInfo(forecast[0]) && (
            <CardInfors
              data={forecast[0]}
              onPressAction={() => setDaySelect(0)}
              selected={cardSelect(0)}
            />
          )}
          {showCardInfo(forecast[1]) && (
            <CardInfors
              data={forecast[1]}
              onPressAction={() => setDaySelect(1)}
              selected={cardSelect(1)}
            />
          )}
          {showCardInfo(forecast[2]) && (
            <CardInfors
              data={forecast[2]}
              onPressAction={() => setDaySelect(2)}
              selected={cardSelect(2)}
            />
          )}
        </View>

        <View style={styles.containerCards}>
          {showCardInfo(forecast[3]) && (
            <CardInfors
              data={forecast[3]}
              onPressAction={() => setDaySelect(3)}
              selected={cardSelect(3)}
            />
          )}
          {showCardInfo(forecast[4]) && (
            <CardInfors
              data={forecast[4]}
              onPressAction={() => setDaySelect(4)}
              selected={cardSelect(4)}
            />
          )}
          {showCardInfo(forecast[5]) && (
            <CardInfors
              data={forecast[5]}
              onPressAction={() => setDaySelect(5)}
              selected={cardSelect(5)}
            />
          )}
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
    marginRight: 16,
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
    marginTop: 4,
    marginBottom: 4,
    fontWeight: 'bold',
    fontSize: 10,
  },

  containerCards: {
    flexDirection: 'row',
    justifyContent: 'center',
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
