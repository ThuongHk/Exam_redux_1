import React from 'react';
// import { STAFFS } from './staffs';
import { Link } from 'react-router-dom';
import SearchStaff from './SearchStaff';
import {useSelector, useDispatch} from 'react-redux';
import { searchAndStaffSelector, searchStaffSelector, staffListSelector } from '../../redux/selector';
import AddStaff from './AddStaff';
import './staff.css';
import staffSlice from './staffSlice';

const Staff = () => {
    const dispatch = useDispatch()
 
    const datasearchStaffSelector = useSelector(searchAndStaffSelector)
    console.log(datasearchStaffSelector);
    const handleDelStaff = (sta) => {
         dispatch(staffSlice.actions.delStaff(sta.id))
    }

    const staffLocale = datasearchStaffSelector.map(sta => {
        return (
            <div className="col-md-2 col-sm-3 col-xs-12 mt-1" key={sta.id}>
                <button className="btn btn-info btn-sm" title='xóa' onClick={()=>handleDelStaff(sta)}>&times;</button>
                <Link to={`/staff/${sta.id}`}>
                    <div className="card">
                        <img className="card-img-top" src={sta.image} alt={sta.name} />
                        <div className="card-body">
                            <h6 className="card-title"> {sta.name}</h6>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    return (
        <div className="container-fluid staff mt-5">
            <div className="row ml-2 mb-2">
                <SearchStaff /> 
              
                            
            </div>
            <div className="row ml-2 mb-1">
            <AddStaff/>
            </div>

            <div className="row">
                {staffLocale}
            </div>
        </div>
    );
};

export default Staff;