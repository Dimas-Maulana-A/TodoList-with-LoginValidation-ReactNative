import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import {Api} from '../../components/Env';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const navigation = useNavigation()

  const Register = async e => {
    e.preventDefault();
    if (!name) {
      alert('please fill name');
    } else if (!email) {
      alert('please fill email');
    } else if (!password) {
      alert('please fill password');
    } else {
      try {
        await axios.post(Api + 'users', {
          name: name,
          email: email,
          password: password,
        });
        navigation.navigate('Login');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.HeaderText}>Register</Text>

      <View style={styles.InputText}>
        <TextInput
          style={styles.TextInput}
          value={name}
          onChangeText={text => setName(text)}
          placeholder="name"
        />
        <TextInput
          style={styles.TextInput}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="email"
        />
        <TextInput
          style={styles.TextInput}
          secureTextEntry={secure}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="password"
        />
        <View style={styles.CheckBoxPassword}>
          <CheckBox
            disable={false}
            value={!secure}
            onValueChange={() => setSecure(!secure)}
          />
          <Text style={styles.textCheck}>Show Password</Text>
        </View>

        <TouchableOpacity style={styles.LoginButton} onPress={Register}>
          <Text style={styles.LoginText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.LoginButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.LoginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  HeaderText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginVertical: 5,
  },

  errorMessage: {
    color: 'red',
    textAlign: 'center',
  },

  InputText: {
    paddingHorizontal: 30,
    marginVertical: 20,
  },

  TextInput: {
    fontSize: 15,
    backgroundColor: '#fafafa',
    padding: 10,
    borderRadius: 15,
    color: 'black',
    marginVertical: 10,
  },

  LoginButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 15,
    marginVertical: 10,
  },

  LoginText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  CheckBoxPassword: {
    flexDirection: 'row',
    marginVertical: 10,
  },

  textCheck: {
    textAlign: 'center',
    alignSelf: 'center',
  },
});
