import React from 'react';

import { View , Text, StyleSheet} from 'react-native';

const CardInfors = () => {
  return (
    <View style={styles.container}>
        <Text>CARD</Text>
    </View>
  );
};

export default CardInfors;

const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      backgroundColor: '#ff0000',
    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
  });
  