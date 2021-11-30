import React from 'react'
import {Image, SafeAreaView} from 'react-native'

export default function Home(){
    return(
        <SafeAreaView>
            <Image style={{width:"100%", height:"100%"}} source={require('../../assets/logo_linux_fundo.jpeg')} />
        </SafeAreaView>
    );
}