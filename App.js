import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

///My Components
import Login from './src/pages/login'
import Register from './src/pages/register';
import ClientDashboard from './src/pages/clientDashboard';
import CompanyDashboard from './src/pages/companyDashboard';
import CreateProduct from './src/pages/createProduct';
import CompanyClientView from './src/pages/companyClientView';
import ShoppingCartView from './src/pages/shoppingCartView';

import ShoppingCart from './src/components/shoppingCartContext'
import BillPage from './src/pages/billPage';

const Stack = createStackNavigator();

export default function App() {

  const [cartValue, setCartValue] = useState([])
  const cart = {
    data: [cartValue,setCartValue]
  }


  return (
    <ShoppingCart.Provider value={cart} >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'Login'} component={Login} options={loginOptions} />
          <Stack.Screen name={'Register'} component={Register} options={loginOptions} />
          <Stack.Screen name={'ClientDashboard'} component={ClientDashboard} options={loginOptions} />
          <Stack.Screen name={'CreateProduct'} component={CreateProduct} options={loginOptions} />
          <Stack.Screen name={'CompanyDashboard'} component={CompanyDashboard} options={loginOptions} />
          <Stack.Screen name={'CompanyClientView'} component={CompanyClientView} options={loginOptions} />
          <Stack.Screen name={'ShoppingCartView'} component={ShoppingCartView} options={loginOptions} />
          <Stack.Screen name={'BillPage'} component={BillPage} options={loginOptions} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </ShoppingCart.Provider>
  )
}

const loginOptions = {
  headerStyle: { backgroundColor: '#C84B31' },
  headerTitleStyle: { color: '#EEEEEE', },
  headerTintColor: '#EEEEEE',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});