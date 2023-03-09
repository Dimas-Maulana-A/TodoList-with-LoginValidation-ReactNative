import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import {Api} from '../../components/Env';
import {axiosAuth} from '../../components/AxiosAuth';
import {useIsFocused, useNavigation} from '@react-navigation/native';

import Delete from './../../image/icons/outline-delete.png';
import Change from './../../image/icons/outline-change.png';

const HomeScreen = () => {
  const [data, setData] = useState();
  const focus = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    LoginChecker();
    GetTodo();
  }, [focus]);

  const LoginChecker = async () => {
    const Token = await AsyncStorage.getItem('@storage_token');
    const Datas = await AsyncStorage.getItem('@storage_data');

    if (Datas === null || Token === null) {
      navigation.navigate('Login');
      setData();
    }
  };

  const GetTodo = async () => {
    const Datas = await AsyncStorage.getItem('@storage_data');
    const datas = JSON.parse(Datas);
    datas.id
      ? axiosAuth
          .get(Api + `todo/user/${datas.id}`)
          .then(result => {
            {
              result.data.data ? setData(result.data.data) : setData([]);
            }
          })
          .catch(err => {
            console.log(err);
          })
      : '';
  };

  const changeStatus = id => {
    axiosAuth
      .patch(Api + `todo/${id}`)
      .then(result => {
        GetTodo();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTodo = userId => {
    axiosAuth
      .delete(Api + `todo/${userId}`)
      .then(result => {
        GetTodo();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return data ? (
    <ScrollView>
      {data.map((item, i) => (
        <View key={item.id} style={styles.bubble}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Details', {
                itemName: item.project,
                itemDesc: item.description,
              })
            }
            style={{
              width: '70%',
            }}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[
                item.status ? styles.linethrough : styles.normal,
                styles.textTodo,
              ]}>
              {item.project}
            </Text>
          </TouchableOpacity>
          <View style={styles.buttonsTodo}>
            <CheckBox
              value={item.status}
              onValueChange={() => changeStatus(item.id)}
            />
            <TouchableOpacity
              style={{marginRight: 5}}
              onPress={() =>
                navigation.navigate('Change', {
                  itemId: item.id,
                  itemName: item.project,
                  itemDesc: item.description,
                })
              }>
              <Image
                source={Change}
                style={{height: 18, width: 18, tintColor: '#393939'}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginLeft: 2}}
              onPress={() => deleteTodo(item.id)}>
              <Image
                source={Delete}
                style={{height: 18, width: 18, tintColor: '#393939'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  ) : (
    <View style={styles.containerLoad}>
      <ActivityIndicator size={60} color="#0002" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  containerLoad: {
    flex: 1,
    justifyContent: 'center',
  },

  bubble: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 20,
  },

  textTodo: {
    fontSize: 18,
    color: 'black',
  },

  linethrough: {
    textDecorationLine: 'line-through',
  },

  buttonsTodo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
