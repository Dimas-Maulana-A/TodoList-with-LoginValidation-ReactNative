import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import {Api} from '../../components/Env';
import {axiosAuth} from '../../components/AxiosAuth';
import { useIsFocused, useNavigation } from '@react-navigation/native';

const AddScreen = () => {
  const [userId, setUserId] = useState('');
  const [project, setProject] = useState('');
  const [description, setDescription] = useState('');
  const focus = useIsFocused()
  const navigation = useNavigation()

  useEffect(() => {
    CheckLogin();
  }, [focus]);

  const CheckLogin = async () => {
    const token = await AsyncStorage.getItem('@storage_token');
    const datas = await AsyncStorage.getItem('@storage_data');
    if (token === null && datas === null) {
      navigation.navigate('Login');
    } else {
      const data = JSON.parse(datas);
      setUserId(data.id);
    }
  };

  const AddDataTodo = async (e) => {
    e.preventDefault()
    axiosAuth
      .post(Api + 'todo', {
        project: project,
        description: description,
        user: userId,
      })
      .then(result => {
        setUserId('')
        setProject('')
        setDescription('')
        navigation.navigate('Home');
      })
      .catch(e => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formControl}>
        <TextInput
          style={styles.formInput}
          value={project}
          onChangeText={text => setProject(text)}
          placeholder="Input project name"
        />
        <TextInput
          style={[styles.formInput, styles.Description]}
          value={description}
          onChangeText={text => setDescription(text)}
          placeholder="Input description project"
        />
      </View>
      <View style={styles.formControl}>
        <TouchableOpacity style={styles.formButton} onPress={AddDataTodo}>
          <Text style={styles.formTextButton}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fafafa',
    flex: 1,
  },

  formControl: {
    padding: 20,

  },

  formInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    color: 'black',
    fontSize: 15,
    marginVertical: 10,
  },

  formButton: {
    backgroundColor: 'white',
    // flex: 1,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  
  formTextButton: {
    textAlign: 'center',
    color: 'black'
  }
});
