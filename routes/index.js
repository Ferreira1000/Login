import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Signin';
import Cadastro from '../pages/Cadastro';



function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}