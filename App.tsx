/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Text, Button, View , TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (<NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontSize: 25
        }
      }}
    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  </NavigationContainer>)
};

const Home = () => {
  return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 30 }}>Home Screen</Text>
  </View>)
}

const Login = (props: { navigation: { navigate: (arg0: string) => void; }; }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Login Screen</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Home')}
        style={{
          backgroundColor: '#007bff', // Change the background color
          padding: 10, // Adjust padding
          borderRadius: 5, // Apply border radius
          margin: 10, // Adjust margin
          borderWidth: 0.5, // Add border width
          borderColor: 'black' // Add border color
        }}
      >
       <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Go to Home Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
