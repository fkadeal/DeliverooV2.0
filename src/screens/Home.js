import {  Text, View ,SafeAreaView,Image} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from "@react-navigation/native"
// import { TailwindProvider } from 'tailwindcss-react-native';

const HomeScreen2 = () =>{
    const navigation = useNavigation();

    useLayoutEffect(() =>{
      navigation.setOptions({
        headerShown:false,
      })

    },[]);

    return (
        <SafeAreaView> 
          <View className='flex-row pb-3  items-center mx-4 space-x-2' > 
          <Image 
          source={{ uri:'https://links.papareact.com/wru' }}
          className="h-7 w-7 bg-gray-300 rounded-full"
          />
            <View >
            <Text className=' font-bold text-xs text-gray-400'>Deliver Now</Text>
            <Text className='font-bold text-xl text-black'>Current Location</Text>
            </View>
           </View>
           
         
        <Text className='text-green-500'>Homdddde ScreenHome ScreenHome ScreenHome ScreenHome Screen</Text> 
      </SafeAreaView>

    );
  }

  export default HomeScreen2;