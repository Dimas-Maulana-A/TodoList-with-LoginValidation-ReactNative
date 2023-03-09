import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from './../../image/Logo.png';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation()
  useEffect(() => {
    Logged()
  }, []);

  const Logged = async () => {
    const Tokens = await AsyncStorage.getItem('@storage_token');
    const Data = await AsyncStorage.getItem('@storage_data');
    if (Tokens !== null && Data !== null) {
      navigation.navigate('Dashboard');
    } else {
      setTimeout(() => navigation.navigate('Login'), 3000);
    }
  };

  return (
    <View style={styles.Container}>
      <Image style={styles.Logo} source={Logo} alt="Image Logo" />
      <Text style={styles.Welcome}>Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  Logo: {
    alignItems: 'center',
    alignSelf: 'center',
    width: 100,
    height: 100,
  },

  Welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
});

export default SplashScreen;
