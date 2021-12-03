import React from 'react';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardInfors = () => {

    return(
        <View style={styles.conteiner}>

        <View style={styles.lineTop} > 
            <View>
            <Text>Hoje</Text>
            <Text style={styles.textCity} >São Paulo</Text>
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
            <Text style={styles.txtTemp} >28ºc </Text>
            <Text style={styles.txtMiddle} >Scotterd cloudes</Text>
            <Text style={styles.txtMiddle} >14:03 Fev 19</Text>
        </View>

        <View style={styles.lineBotton}>
            <View style={styles.linebottonLeft}>
            <Text style={styles.txtBottonLeft}  >Wind</Text>
            <Text style={styles.txtBottonLeft} >Cloudiness</Text>
            <Text style={styles.txtBottonLeft} >Pressure</Text>
            <Text style={styles.txtBottonLeft} >Humidity</Text>
            <Text style={styles.txtBottonLeft} >Sunrise</Text>
            <Text style={styles.txtBottonLeft} >Sunset</Text>
            <Text style={styles.txtBottonLeft} >Geo coords</Text>
            </View>
            <View style={styles.linebottonRight} >
            <Text style={styles.txtBottonRight} >Wind</Text>
            <Text style={styles.txtBottonRight} >Cloudiness</Text>
            <Text style={styles.txtBottonRight} >Pressure</Text>
            <Text style={styles.txtBottonRight} >Humidity</Text>
            <Text style={styles.txtBottonRight} >Sunrise</Text>
            <Text style={styles.txtBottonRight} >Sunset</Text>
            <Text style={styles.txtBottonRight} >Geo coords</Text>
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
        backgroundColor: "#fff",
        flex: 3,
        height: "95%",
        borderRadius: 16,
        padding:16,
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
        borderTopWidth: 2,  
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