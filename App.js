import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './src/pages/Login'
import SignupClient from './src/pages/SignupClient'
import SignupDrive from './src/pages/SignupDrive'
import Menu from './src/pages/Drawer'

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Inicio de sesión" component={Login} />
        <Stack.Screen name="Registo de cliente" component={SignupClient} />
        <Stack.Screen name="Registro de conductor" component={SignupDrive} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});


// <View style={styles.container}>
//         <LoginForm />
//       </View>