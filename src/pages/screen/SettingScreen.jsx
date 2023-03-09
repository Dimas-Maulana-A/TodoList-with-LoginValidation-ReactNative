import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {axiosAuth} from '../../components/AxiosAuth';

import Profile from './../../image/icons/profile.png';
import UnClear from "./../../image/icons/unclear.png"
import About from "./../../image/icons/more.png"

const SettingScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.bubbleProfile} onPress={()=> navigation.navigate('Profile')}>
        <Image source={Profile} style={{width: 30, height: 37.5}} />
        <Text style={styles.textProfile}>Profile</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity style={styles.bubbleAbout} onPress={()=> navigation.navigate('AboutApp')}>
          <Image source={About} style={{width: 30, height: 30}} />
          <Text style={styles.textProfile}>About App</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bubbleAbout} onPress={()=> navigation.navigate('Finished')}>
          <Image source={UnClear} style={{width: 30, height: 30}} />
          <Text style={styles.textProfile}>The Project is finished</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bubbleAbout} onPress={()=> navigation.navigate('UnFinished')}>
          <Image source={UnClear} style={{width: 30, height: 30}} />
          <Text style={styles.textProfile}>The Project is not finished</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bubbleProfile: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 3,
  },

  textProfile: {
    fontSize: 15,
    color: 'black',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },

  bubbleAbout: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
