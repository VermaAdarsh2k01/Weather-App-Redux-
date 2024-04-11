import {configureStore} from '@reduxjs/toolkit'
import weatherReducer from '../features/weatherDataSlice'

const store = configureStore({
    reducer:{
        weather: weatherReducer
    }
})

export default store