import React, { useState } from 'react'
import {Button,StyleSheet,Text, Image,TextInput ,SafeAreaView, FlatList, TouchableOpacity, StatusBar} from 'react-native'
import API from '../../service/api';

export default function Home(){

    const [cityName, setCityName] = useState("");
    const [citys, setCitys] = useState([]);

    async function getCitys(cidade) {
        const response = await API.getCityByName(cidade);
        setCitys(response);
        console.warn(citys);
    }


    const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
          <Text style={[styles.title, textColor]}>{item.name} {item.country}</Text>
        </TouchableOpacity>
      );

    const [selectedId, setSelectedId] = useState(null);

    
    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? 'white' : 'black';
    
        return (
          <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
          />
        );
      };
    
          


    function teste(){
        console.warn("Clicado!");
    }



    return(
        <SafeAreaView>
            {/* <Image style={{width:"100%", height:"100%"}} source={require('../../assets/logo_linux_fundo.jpeg')} /> */}
            
            <TextInput
            // style={styles.input}
            onChangeText={setCityName}
            value={cityName}
            placeholder="Pesquise por uma cidade"
            keyboardType="numeric"
            />
            <Button
                onPress={()=>getCitys(cityName)} 
                title="TESTE"
                color="#841584"
                accessibilityLabel="Pesquise por uma cidade"
            />

       <FlatList
        data={citys}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
        
        </SafeAreaView>
      
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });