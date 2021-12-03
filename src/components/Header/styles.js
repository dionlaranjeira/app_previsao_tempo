import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const Container = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 1.0,

  elevation: 1,
})`
  background: #683265;
  min-height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${props => props.statusBarHeight + 16}px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  padding: 0 16px;
  max-width: 300px;
`;

export const BoxIcon = styled(TouchableOpacity)`
  border-radius: 16px;
  padding: 4px;
`;

export const IconFake = styled.View`
  width: 28px;
  height: 28px;
`;
