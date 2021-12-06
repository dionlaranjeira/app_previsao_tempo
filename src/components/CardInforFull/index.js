import React from 'react';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardInfors = ({data}) => {

   

    return(
        <View style={styles.conteiner}>

        <View style={styles.lineTop} > 
            <View>
            <Text>{data?.day}</Text>
            <Text style={styles.textCity} >{data?.city}</Text>
            </View>
            <Icon
          name="cloud"
          onPress={() => getCitys(cityName)}
          color="#000"
          size={24}
          style={styles.iconSeach}
        />

        </View>  
        <View style={styles.lineMiddle}>
            <Text style={styles.txtTemp} >{data?.temp.substring(0,2)}ºC</Text>
            <Text style={styles.txtMiddle} >{data?.cloudiness}</Text>
            <Text style={styles.txtMiddle} >{data?.date}</Text>
        </View>

        <View style={styles.lineBotton}>
            <View style={styles.linebottonLeft}>
            <Text style={styles.txtBottonLeft}  >Vento</Text>
            <Text style={styles.txtBottonLeft} >Nebulosidade</Text>
            <Text style={styles.txtBottonLeft} >Pressão</Text>
            <Text style={styles.txtBottonLeft} >Umidade</Text>
            <Text style={styles.txtBottonLeft} >Nascer do sol</Text>
            <Text style={styles.txtBottonLeft} >Por do sol</Text>
            <Text style={styles.txtBottonLeft} >Geo localização</Text>
            </View>
            <View style={styles.linebottonRight} >
            <Text style={styles.txtBottonRight} >{data?.wind}</Text>
            <Text style={styles.txtBottonRight} >{data?.cloudiness}</Text>
            <Text style={styles.txtBottonRight} >{data?.pressure}</Text>
            <Text style={styles.txtBottonRight} >{data?.humidity}</Text>
            <Text style={styles.txtBottonRight} >{data?.sunrise}</Text>
            <Text style={styles.txtBottonRight} >{data?.sunset}</Text>
            <Text style={styles.txtBottonRight} >{data?.coords}</Text>
            </View>
                
        </View>  

      </View>
    )

}

const styles = StyleSheet.create({

    conteiner:{
        justifyContent: 'space-between',
        marginTop: 8,
        marginBottom: 8,
        marginRight: 8,
        backgroundColor: "#fff",
        flex: 5,
        height: "95%",
        borderRadius: 16,
        padding:16,
        paddingRight:9,
      },

      lineTop:{
          flexDirection: 'row',
          justifyContent: 'space-between',
      },
      
      textCity:{
          fontWeight: 'bold',
          fontSize: 16,
      },
      lineMiddle: {
        flexDirection: 'column',
        alignItems: 'center',
      },

      txtTemp:{
        fontSize:38,
        fontWeight: 'bold',
      },
      txtMiddle:{
        color: "#503268",
        fontSize: 10,
      },

      lineBotton: {
        borderTopColor: "#503268",
        borderTopWidth: 1,  
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },

      txtBottonLeft:{
        color: "#503268",
        fontWeight: 'bold',
        fontSize: 10,
      },
      txtBottonRight:{
        color: "#503268",
        textAlign: 'right',
        fontSize: 10,
      }
});

export default CardInfors;