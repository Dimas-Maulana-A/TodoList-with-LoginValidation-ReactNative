import React, {useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused, useNavigation } from '@react-navigation/native'

const LogoutValidation = () => {
  const focus = useIsFocused()
  const navigation = useNavigation()
  useEffect(()=> {
    LogOut()
  },[focus])

  const LogOut = async()=>{
    await AsyncStorage.clear()
    navigation.navigate('Login')
    // const Token = await AsyncStorage.getItem('@storage_token')
    // const Data = await AsyncStorage.getItem('@storage_data')
    // if(Token === null && Data === null){
    //   navigation.navigate('Login')
    // }
  }
}

export default LogoutValidation