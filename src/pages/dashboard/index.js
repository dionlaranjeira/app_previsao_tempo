import React ,{useState} from 'react'
import {Text, View, SafeAreaView, Button} from 'react-native'
import {TextInputBox, Container} from './styles'
import CardInfors from '../../components/CardInfors'
export default function Dashboard(){


const [city, setCity] = useState('');


    return(
        <SafeAreaView>
            <Container>
                <View style={{backgroundColor:"#00ff00"}} >
                    <Text>Seja bem vindo</Text>
                    <Text>Selecione uma cidade</Text>
                    <TextInputBox
                        placeholder="Pesquisar por cidade"
                        value={city}
                        onChangeText={(text) => setCity(text)}
                     />
                </View>
                <CardInfors/>
                
            </Container>
             
      

           
        </SafeAreaView>
    );
}