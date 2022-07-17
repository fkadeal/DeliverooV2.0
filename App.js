/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'; 

import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import HomeScreen2 from './src/screens/Home';

export default function App /*const App : () => Node = () => */() {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // }; 

 
  return (
    <NavigationContainer>
      <TailwindProvider>
          {/* <SafeAreaView  > */}
      <Stack.Navigator >
        <Stack.Screen name="Home2"  component={HomeScreen2}   options={{ title: 'home' }}  />  

  
      {/*<StatusBar  barStyle={isDarkMode ? 'light-content' : 'dark-content'}  />*/}
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        /* style={backgroundStyle} /  >  */}
        {/* <View >  */}
        
        {/* <Text className='text-red-500'>
       fkadeal Save
      </Text> */}
     
        {/* </View> */}
      {/* </ScrollView> */} 
    </Stack.Navigator> 
    {/* </SafeAreaView> */}
    </TailwindProvider>
    </NavigationContainer>
  );
};

 

// export default App;
