import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
  

const departmentSlice = createSlice({
    name: 'department',
    initialState: { 
     status: 'idle',
     departments: []
    },
    reducers: {
        deparFilter: (state, action)=>{
            state.status = 'idle'
            state.department = action.payload;
        }
    }, 
    extraReducers: builder =>{
        builder
        .addCase(getDepartment.fulfilled, (state, action)=>{
            console.log(action.payload);
            state.status = 'success'
            state.departments = action.payload;
        })
    }
})

export const getDepartment = createAsyncThunk('department/getDepartment', async ()=>{
    const res = await fetch('https://rjs101xbackend.herokuapp.com/departments')
    const data = await res.json()
    console.log(data);
    return data
})

export default departmentSlice;

