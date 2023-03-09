import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Profile from './../../image/icons/profile.png';

const ProfileScreen = () => {
  const [data, setData] = useState();
  const [uName, setUName] = useState();
  const [uEmail, setUEmail] = useState();
  const focused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    GetDataAsync();
  }, [focused]);

  const GetDataAsync = async () => {
    const dataUser = JSON.parse(await AsyncStorage.getItem('@storage_data'));
    setUName(dataUser.name);
    setUEmail(dataUser.email);
  };

  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        padding: 30,
      }}>
      <Image
        source={Profile}
        style={{
          width: 70,
          height: 87.5,
          marginVertical: 20,
          alignSelf: 'center',
        }}
      />
      <Text
        style={{
          color: 'black',
          fontSize: 15,
          marginVertical: 5,
        }}>
        Name :
      </Text>
      <Text
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 15,
          color: 'black',
          fontWeight: 'bold',
          fontSize: 20,
          marginVertical: 10,
        }}>
        {uName}
      </Text>
      <Text
        style={{
          color: 'black',
          fontSize: 15,
          marginVertical: 5,
        }}>
        Email :
      </Text>
      <Text
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 15,
          color: 'black',
          fontWeight: 'bold',
          fontSize: 20,
          marginVertical: 10,
        }}>
        {uEmail}
      </Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
