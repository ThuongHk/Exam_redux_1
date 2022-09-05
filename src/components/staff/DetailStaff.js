import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { staffListSelector } from '../../redux/selector';
import EditStaff from './EditStaff';
// import { STAFFS } from './staffs';

const DetailStaff = () => {

    const params = useParams()
    console.log(params);
    const dataShowDetailStaff = useSelector(staffListSelector)
    console.log(dataShowDetailStaff);
    const detailStaff = dataShowDetailStaff.find(sta => sta.id.toString() === params.id)
    // console.log();
    console.log(detailStaff);
    return (
        <div className='container-fluid detail'>
           
            <Link to='/staff'>Nhan vien</Link>/ <b>{detailStaff?.name}</b>
            <div className="card">
                <div className="row">
                    <div className="col-md-3 col-sm-4 col-xs-12">
                        <img className="card-img-top" src={detailStaff?.image} alt={detailStaff?.name} />
                    </div>
                    <div className="col-md-3 col-sm-8 col-xs-12">
                        <div className="card-body">
                            <h6 className="card-title">{detailStaff?.name}</h6>
                            <p className="card-text">{detailStaff?.department}</p>
                        </div>
                    </div>

                </div>


            </div>
            <EditStaff staffEdit={detailStaff}/>
        </div>
    );
};

export default DetailStaff;