import React, { useEffect } from 'react';
// import { DEPARTMENTS } from '../staff/staffs';
import {useDispatch, useSelector} from 'react-redux';
import { getDepartment } from './departmentSlice';
import { departmentSelector } from '../../redux/selector';

const Department = () => {
    const dispatch = useDispatch()
    useEffect(() =>{
       dispatch(getDepartment());
    },[]);

    const dataDepartment = useSelector(departmentSelector);

    console.log(dataDepartment);
    const department = dataDepartment?.map(dep => {
        return (
            <div className='col-md-4 col-sm-6 col-xs-12 mb-3' key={dep.id}>
                <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Phong ban: {dep.name}</h4>
                    <p className="card-text">So luong nhan vien: {dep.numberOfStaff}</p>
                </div>
            </div>
            </div>
        )
    })
    return (
        <div className='container-fluid'>
            <div className='row mt-4 mb-4'>
                {department}
            </div>
        </div>
    );
};

export default Department;