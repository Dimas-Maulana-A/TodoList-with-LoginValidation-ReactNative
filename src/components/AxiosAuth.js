import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const axiosAuth = axios.create()

axiosAuth.interceptors.request.use(async(config)=> {
    const token = AsyncStorage.getItem('@storage_token')
    config.headers.Authorization = `Bearer ${token}`
    return config
},(err)=> {
    return Promise.reject(err)
})

