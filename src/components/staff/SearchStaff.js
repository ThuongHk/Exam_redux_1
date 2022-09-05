import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import staffSlice from './staffSlice';

const SearchStaff = () => {
    const dispatch = useDispatch()

    const [inputName, setInputName] = useState('')

    const handleChangeSearchStaff = (e) => {
        setInputName(e.target.value);
        dispatch(staffSlice.actions.searchStaff(e.target.value))

    }
    return (
        <div>
            <b>Tim Kiem Nhan Vien: </b><br/>
            <input type="text" value={inputName} onChange={handleChangeSearchStaff}/>
        </div>
    );
};

export default SearchStaff;