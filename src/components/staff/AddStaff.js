import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {v4 as uuidv4} from 'uuid';
import staffSlice from './staffSlice';
// import './addStaff.css';
const schema = yup.object().shape({
  name: yup
  .string()
  .required('Vui lòng nhập họ tên của bạn')
  .min(4,'Họ tên tối thiểu 4 kí tự'),
  doB: yup
    .string()
    .required('Vui lòng nhập ngày sinh'),
  salaryScale: yup 
  .number()
  .required('Vui lòng nhập hệ số lương')
  .min(1, 'Hệ số lương tối thiểu là 1')
  .max(5, 'Hệ số lương tối đa là 5'),

})


const AddStaff = () => {
    // const { register, handleSubmit, watch, formState: {errors}} = useForm();
    const dispatch = useDispatch()
    const {register, handleSubmit, watch, formState: {errors}} = useForm({resolver: yupResolver(schema), defaultValues:{}});

    // modal------
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    // modal------

  const onHandleSubmit = (data) => {
    console.log(data);
    dispatch(staffSlice.actions.addStaff({
      id: uuidv4(),
      name: data.name,
      dob: data.dob,
      salaryScale: data.salaryScale,
      startDate: data.startDate,
      department: data.department,
      annualLeave: data.annualLeave,
      overTime: data.overTime,
      image: '/asset/images/alberto.png'


    }))
  }

    return (
        <div>
      <Button className='btn btn-info btn-sm' color="danger" onClick={toggle}>
       +
      </Button>
      <Modal isOpen={modal} toggle={toggle} > 
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
         <form onSubmit={handleSubmit(onHandleSubmit)}>
            <div className="form-group">
              <label>Họ và tên:</label>
              <input type="text"className="form-control"  {...register('name')} id='name'/> 
              {errors.name &&<p className="error">{errors.name?.message}</p>}            
            </div>
            <div className="form-group">
              <label>Ngày sinh:</label>
              <input type="date"className="form-control" {...register('doB')}/>   
              {errors.doB &&<p className="error">{errors.doB?.message}</p>}              
            </div>
            <div className="form-group">
              <label>Hệ số lương:</label>
              <input type="number" min='1' {...register('salaryScale')} className="form-control" /> 
              {errors.salaryScale &&<p className="error">{errors.salaryScale?.message}</p>}                
            </div>
            <div className="form-group">
              <label>Ngày vào công ty:</label>
              <input type="date"className="form-control" {...register('startDate')} />  
              {errors.startDate &&<p className="error">{errors.startDate?.message}</p>}                

            </div>
            <div className="form-group">
              <label>Phòng ban:</label>
              <select className="form-control" {...register('department')}>
                <option value='Sale'>Sale</option>
                <option value='HR'>HR</option>
                <option value='Marketing'>Marketing</option>
                <option value='IT'>IT</option>
                <option value='Finance'>Finance</option>
              </select>
            </div>
            <div className="form-group">
              <label>Số ngày nghỉ còn lại:</label>
              <input type="number" min='1' max='5' {...register('annualLeave')} className="form-control" />
              {errors.annualLeave &&<p className="error">{errors.annualLeave?.message}</p>}                

            </div>
            <div className="form-group">
              <label>Số ngày làm thêm:</label>
              <input type='number' min='0' max='10' {...register('overTime')} className="form-control" />
              {errors.overTime &&<p className="error">{errors.overTime?.message}</p>}                

            </div>
            <div className="form-group">
              <label>Hình đại diện:</label>
              <input type="file"  playholder= '/asset/images/alberto.png' className="form-control" />             
            </div>
            <button type="submit" className="btn btn-primary btn-sm">Submit</button>

         </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
           Hoàn Thành
          </Button>{' '}
          {/* <Button color="secondary" onClick={toggle}>
            Cancel
          </Button> */}
        </ModalFooter>
      </Modal>
    </div>
    );
};

export default AddStaff;