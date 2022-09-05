import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { STAFFS} from './staffs';

const staffSlice = createSlice({
    name: 'staffSlice',
    initialState: {
        searchStaff: '',
        allStaff: [],
        status: 'idle'
    },
    reducers: {
        searchStaff: (state, action) => {
            state.searchStaff = action.payload
        },
        addStaff: (state, action) => {
            console.log(action.payload);
            state.allStaff.push(action.payload)
        },
        delStaff: (state, action)=>{
            const staffId = action.payload
            const newStaff = state.allStaff.filter(sta => sta.id !== staffId)
            state.allStaff = newStaff

        },
        editStaff: (state, action) =>{
            state.allStaff = action.payload
        }

    },
    extraReducers: builder =>{
        builder 
        .addCase(getStaff.fulfilled, (state, action) =>{
            console.log(action.payload);
              state.status = 'success'
              state.allStaff = action.payload
        })
    }
})

 export const getStaff = createAsyncThunk('staff/getStaff', async ()=>{
    const res = await fetch('https://rjs101xbackend.herokuapp.com/')
    const data = await res.json()
    console.log(data);
    return data
 })

export default staffSlice;