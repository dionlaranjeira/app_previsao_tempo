import styled from 'styled-components/native';

export const Container = styled.Modal``;

export const ModalContainer = styled.View`
  flex: 1;
  background-color: #503268;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.ActivityIndicator.attrs({
  color: '#fff',
  size: 'large',
})``;

export const Info = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
