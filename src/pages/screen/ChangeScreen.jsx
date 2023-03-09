import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { axiosAuth } from '../../components/AxiosAuth'
import { useNavigation } from '@react-navigation/native'
import { Api } from '../../components/Env'

const ChangeScreen = ({route}) => {
    const {itemId, itemName, itemDesc} = route.params
    // const [todoId, setTodoId] = useState(itemId)
    const [todoName, setTodoName] = useState(itemName)
    const [todoDesc, setTodoDesc] = useState(itemDesc)
    const navigation = useNavigation()

    const ChangeDataTodo = (e)=> {
        e.preventDefault()
        axiosAuth.put(Api + `todo/${itemId}`, {
            project: todoName,
            description: todoDesc
        })
        .then(result=> {
            setTodoName('')
            setTodoDesc('')
            navigation.navigate('Home')
        })
        .catch(err=> {
            console.log(err)
        })
    }
  return (
    <View style={styles.container}>
      <View style={styles.formControl}>
        <TextInput
          style={styles.formInput}
          value={todoName}
          onChangeText={text => setTodoName(text)}
          placeholder="input project name"
        />
        <TextInput
          style={[styles.formInput, styles.Description]}
          value={todoDesc}
          onChangeText={text => setTodoDesc(text)}
          placeholder="input description project"
        />
      </View>
      <View style={styles.formControl}>
        <TouchableOpacity style={styles.formButton} onPress={ChangeDataTodo}>
          <Text style={styles.formTextButton}>Change</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ChangeScreen

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
  