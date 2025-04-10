import styled from 'styled-components/native';
import { StatusBar, StyleSheet, View } from 'react-native';
import theme from '../styles/theme';

export const HeaderWrapper = styled(View)`
  background-color: ${theme.colors.primary};
  padding-top: ${StatusBar.currentHeight}px;
  padding: ${theme.spacing.medium}px;
`;

export const HeaderTitle = styled.Text`
  color: ${theme.colors.white};
  font-size: ${theme.typography.title.fontSize}px;
  font-weight: ${theme.typography.title.fontWeight};
`;

// Estilos de sombra usando StyleSheet
export const shadowStyle = StyleSheet.create({
  shadow: {
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
});
