import React from 'react';
import { STAFFS } from '../staff/staffs';

const Salary = () => {

    function Salary(a, b) {
        const sumSal = a * 3000000 + b * 200000;
        return sumSal
    }
    const salary = STAFFS.map(sal => {
        return (
           <div className="col-md-3 col-sm-4 col-xs-12 mb-2" key={sal.id}>
             <div className="card">
                <div className="card-body">
                    <h6 className="card-title">{sal.name}</h6>
                    <p className="card-text">Luong: {Salary((sal.salaryScale), (sal.overTime))} </p>
                </div>
            </div>
           </div>
        )
    })
    return (
        <div className=' container-fluid salary'>
            <div className='row mb-4 mt-4'>
                {salary}
            </div>
        </div>
    );
};

export default Salary;