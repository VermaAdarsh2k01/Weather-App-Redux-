import {createSlice} from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
    name:'weather',
    initialState:{},
    reducers:{
        setWeatherData: (state , action) => {
            state.data = action.payload
        }
    }
}) 

export const {setWeatherData} = weatherSlice.actions;

export default weatherSlice.reducer