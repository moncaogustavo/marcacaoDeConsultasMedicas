import React from 'react';
import styled from 'styled-components/native';
import { FlatList, View } from 'react-native';
import { Button } from 'react-native-elements';
import { HeaderWrapper, HeaderTitle, shadowStyle } from '../components/Header';
import theme from '../styles/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  CreateAppointment: undefined;
  Profile: undefined;
};

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

type Appointment = {
  id: string;
  doctor: {
    name: string;
    image: string;
    specialty: string;
  };
  date: string;
  time: string;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [appointments, setAppointments] = React.useState<Appointment[]>([]);

  return (
    <Container>
      <View style={shadowStyle.shadow}>
        <HeaderWrapper>
          <HeaderTitle>Minhas Consultas</HeaderTitle>
        </HeaderWrapper>
      </View>

      <Content>
        <Button 
          title="Agendar Nova Consulta"
          icon={{
            name: 'calendar-plus',
            type: 'font-awesome',
            size: 20,
            color: 'white'
          }}
          buttonStyle={{
            backgroundColor: theme.colors.primary,
            borderRadius: 8,
            padding: 12
          }}
          onPress={() => navigation.navigate('CreateAppointment')}
        />

        <AppointmentList
          data={appointments}
          keyExtractor={(item: Appointment) => item.id}
          renderItem={({ item }: { item: Appointment }) => (
            <AppointmentCard>
              <DoctorImage source={{ uri: item.doctor.image }} />
              <InfoContainer>
                <DoctorName>{item.doctor.name}</DoctorName>
                <Specialty>{item.doctor.specialty}</Specialty>
                <DateTime>{item.date} - {item.time}</DateTime>
              </InfoContainer>
            </AppointmentCard>
          )}
          ListEmptyComponent={
            <EmptyText>Nenhuma consulta agendada</EmptyText>
          }
        />
      </Content>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

const Content = styled.View`
  flex: 1;
  padding: ${theme.spacing.medium}px;
`;

const AppointmentList = styled(FlatList as new () => FlatList<Appointment>)`
  margin-top: ${theme.spacing.medium}px;
`;

const AppointmentCard = styled.View`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  padding: ${theme.spacing.medium}px;
  margin-bottom: ${theme.spacing.medium}px;
  flex-direction: row;
  align-items: center;
`;

const DoctorImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: ${theme.spacing.medium}px;
`;

const InfoContainer = styled.View`
  flex: 1;
`;

const DoctorName = styled.Text`
  font-size: ${theme.typography.subtitle.fontSize}px;
  font-weight: ${theme.typography.subtitle.fontWeight};
  color: ${theme.colors.text};
`;

const Specialty = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.text};
  opacity: 0.8;
`;

const DateTime = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.primary};
  margin-top: 4px;
`;

const EmptyText = styled.Text`
  text-align: center;
  color: ${theme.colors.text};
  opacity: 0.6;
  margin-top: ${theme.spacing.large}px;
`;

export default HomeScreen;
