import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Company from './Company'

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Company" component={Company} />
    </Drawer.Navigator>
  );
}
