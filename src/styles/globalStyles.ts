// src/components/StyledButton.tsx
import styled from 'styled-components/native';
export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
export const Button = styled.TouchableOpacity`
  background-color: #007BFF;
  padding: 15px;
  border-radius: 5px;
  width: 200px;
  align-items: center;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;