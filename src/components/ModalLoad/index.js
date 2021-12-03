import React from 'react';
import {Container, ModalContainer, Spinner, Info} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
const ModalLoad = ({
  onRequestClose,
  visible,
  getCitys = false,
  submit,
  sucess,
}) => {
  return (
    <Container
      animationType="fade"
      statusBarTranslucent={true}
      onRequestClose={onRequestClose}
      visible={visible}>
      <ModalContainer>
        <Spinner />
        <Info>
          {getCitys ? 'Obtendo previsões do tempo...' : 'Buscando cidades...'}
        </Info>
        <Icon
          name="search"
          color="#fff"
          size={24}
          // style={styles.iconSeach}
        />
        {getCitys && <Info>{`${sucess} de ${submit}`}</Info>}
      </ModalContainer>
    </Container>
  );
};

export default ModalLoad;
