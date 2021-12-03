import styled from 'styled-components/native';
import {FlatList, TouchableOpacity} from 'react-native';

export const Container = styled.Modal``;

export const ModalContainer = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

export const HeaderContainer = styled.View`
  background-color: #614677;
`;

export const HeaderContent = styled.View`
  background-color: #614677;
  height: ${props => (props.statusBarHeight === 0 ? 34 : 0)}px;
`;

export const List = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const Item = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  background-color: #b9adc2;
  padding: 8px 16px;
  border-radius: 4px;
  margin-bottom: 8px;
`;

export const ItemText = styled.Text`
  color: #503268;
  font-size: 16px;
  padding: 8px 0;
`;

export const Button = styled(TouchableOpacity)`
  background-color: #683265;
  height: 56px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
