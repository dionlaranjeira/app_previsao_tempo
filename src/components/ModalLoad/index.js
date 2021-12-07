import React from 'react';
import {Container, ModalContainer, Spinner, Info} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
const ModalLoad = ({onRequestClose, visible, haveForecast}) => {
  return (
    <Container
      animationType="fade"
      statusBarTranslucent={true}
      onRequestClose={onRequestClose}
      visible={visible}
      supportedOrientations={['landScape','portrait']}
      >
      <ModalContainer
      supportedOrientations={['landScape','portrait']}
      >
        <Spinner />
        {/* <Info>
          {haveForecast
            ? 'Obtendo previsões do tempo...'
            : 'Buscando cidades...'}
        </Info> */}
        {/* <Icon
          name={haveForecast ? 'cloud' : 'search'}
          color="#fff"
          size={24}
          // style={styles.iconSeach}
        /> */}
      </ModalContainer>
    </Container>
  );
};

export default ModalLoad;
