import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Button, Input } from 'react-native-elements';
import { HeaderWrapper, HeaderTitle } from '../components/Header';
import theme from '../styles/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Picker } from '@react-native-picker/picker';

type RootStackParamList = {
  Home: undefined;
  CreateAppointment: undefined;
  Profile: undefined;
};

type CreateAppointmentScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'CreateAppointment'>;
};

const CreateAppointmentScreen: React.FC<CreateAppointmentScreenProps> = ({ navigation }) => {
  const [doctorName, setDoctorName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    if (!doctorName || !specialty || !date || !time) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Aqui você pode adicionar lógica para salvar no contexto ou AsyncStorage
    alert('Consulta agendada com sucesso!');
    navigation.navigate('Home');
  };

  return (
    <Container>
      <HeaderWrapper>
        <HeaderTitle>Agendar Consulta</HeaderTitle>
      </HeaderWrapper>

      <Content>
        <Button
          title="Voltar"
          icon={{
            name: 'arrow-left',
            type: 'font-awesome',
            size: 20,
            color: 'white'
          }}
          buttonStyle={{
            backgroundColor: theme.colors.primary,
            borderRadius: 8,
            padding: 12,
            marginBottom: 20
          }}
          onPress={() => navigation.goBack()}
        />

        <Input
          placeholder="Nome do Médico"
          value={doctorName}
          onChangeText={setDoctorName}
        />

        <PickerContainer>
          <Picker
            selectedValue={specialty}
            onValueChange={(itemValue) => setSpecialty(itemValue)}
          >
            <Picker.Item label="Selecione a Especialidade" value="" />
            <Picker.Item label="Cardiologia" value="Cardiologia" />
            <Picker.Item label="Pediatria" value="Pediatria" />
            <Picker.Item label="Ortopedia" value="Ortopedia" />
            <Picker.Item label="Clínico Geral" value="Clínico Geral" />
          </Picker>
        </PickerContainer>

        <Input
          placeholder="Data (ex: 25/04/2025)"
          value={date}
          onChangeText={setDate}
        />

        <Input
          placeholder="Hora (ex: 14:30)"
          value={time}
          onChangeText={setTime}
        />

        <Button
          title="Salvar Consulta"
          buttonStyle={{
            backgroundColor: theme.colors.primary,
            borderRadius: 8,
            padding: 12,
            marginTop: 20
          }}
          onPress={handleSubmit}
        />
      </Content>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

const Content = styled.ScrollView`
  flex: 1;
  padding: ${theme.spacing.medium}px;
`;

const PickerContainer = styled.View`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  margin-bottom: ${theme.spacing.medium}px;
`;

export default CreateAppointmentScreen;
