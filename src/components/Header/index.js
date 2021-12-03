import React from 'react';
import {Container, Title, BoxIcon, IconFake} from './styles';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Header({
  title,
  iconLeft,
  actionLeft,
  iconRight,
  actionRight,
}) {
  return (
    <Container statusBarHeight={getStatusBarHeight(true)}>
      {iconLeft ? (
        <BoxIcon onPress={() => actionLeft()}>
          <Icon name={iconLeft} size={24} color="#fff" />
        </BoxIcon>
      ) : (
        <IconFake />
      )}
      <Title>{title}</Title>
      {iconRight ? (
        <BoxIcon onPress={() => actionRight()}>
          <Icon name={iconRight} size={24} color="#fff" />
        </BoxIcon>
      ) : (
        <IconFake />
      )}
    </Container>
  );
}
