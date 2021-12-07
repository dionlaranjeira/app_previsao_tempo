import React, {useState, useEffect} from 'react';
import {
  Container,
  ModalContainer,
  List,
  Item,
  ItemText,
  Button,
  ButtonText,
  HeaderContent,
  HeaderContainer,
} from './styles';
import Header from '../Header';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {shadow} from '../../assets/style';

const ModalSelectCity = ({
  onRequestClose,
  visible,
  data,
  onPressAction,
  title,
}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, [data]);

  return (
    <Container
      animationType="slide"
      statusBarTranslucent={true}
      onRequestClose={onRequestClose}
      visible={visible}
      supportedOrientations={['landScape', 'portrait']}>
      <ModalContainer>
        <HeaderContainer>
          <HeaderContent statusBarHeight={getStatusBarHeight(true)} />
          <Header
            title={title}
            iconLeft="arrow-left"
            actionLeft={() => onRequestClose()}
          />
        </HeaderContainer>
        <List
          data={items}
          keyExtractor={item => `${item.id}`}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <Item onPress={() => onPressAction(item)} style={shadow}>
              <ItemText>
                {item.name} - {item.country}
              </ItemText>
            </Item>
          )}
        />
        <Button onPress={() => onRequestClose()}>
          <ButtonText>Voltar</ButtonText>
        </Button>
      </ModalContainer>
    </Container>
  );
};

export default ModalSelectCity;
