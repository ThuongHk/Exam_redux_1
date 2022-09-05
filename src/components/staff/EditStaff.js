import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { useForm } from "react-hook-form";
import staffSlice from "./staffSlice";
import { useDispatch } from "react-redux";

const EditStaff = ({ staffEdit }) => {
//   const [name, setName] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({defaultValue: {}});
  const dispatch = useDispatch();

  //modal_______
  // const {
  //   buttonLabel,
  //   className
  // } = staffEdit;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  //modal---------
  const handleSubmitUpdateStaff = (data) => {       
    dispatch(staffSlice.actions.editStaff({
      id: staffEdit.id,
      name: data.name,
      birthday: data.birthday,
      salaryScale: data.salaryScale,
      startDate: data.startDate,
      department: data.department,
      annualLeave: data.annualLeave,
      overTime: data.overTime,
      image: "/assets/images/daidien.png",
    }))
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {staffEdit?.buttonLabel} Edit
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={staffEdit?.className}>
        <ModalHeader className="btn btn-info" toggle={toggle}>
          Chỉnh Sửa Thông Tin Nhân Viên
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(handleSubmitUpdateStaff)}>
            <div className="form-group">
              <label>Họ và tên: </label>
              <input
                type="text"
                {...register("name")}
                defaultValue={staffEdit?.name}
                className="form-control"
                id="name"
              />
              {errors.name && <p className="error">{errors.name?.message}</p>}
            </div>
            <div className="form-group">
              <label>Ngày sinh: </label>
              <input
                type="date"
                {...register("birthday")}
                defaultValue={staffEdit?.birthday}
                className="form-control"
                id="birthday"
              />
              {errors.birthday && (
                <p className="error">{errors.birthday?.message}</p>
              )}
            </div>
            <div className="form-group">
              <label>Hệ số Lương: </label>
              <input
                type="number"
                {...register("salaryScale")}
                defaultValue={staffEdit?.salaryScale}
                className="form-control"
                id="salaryScale"
                min="0"
              />
              {errors.salaryScale && (
                <p className="error">{errors.salaryScale?.message}</p>
              )}
            </div>
            <div className="form-group">
              <label>Ngày vào công ty: </label>
              <input
                type="date"
                {...register("startDate")}
                defaultValue={staffEdit?.startDate}
                className="form-control"
                id="startDate"
              />
              {errors.startDate && (
                <p className="error">{errors.startDate?.message}</p>
              )}
            </div>

            <div className="form-group">
              <label>Phòng ban:</label>
              <select
                className="form-control"
                {...register("department")}
                id="department"
                defaultValue={staffEdit?.department}
              >
                <option value="Sale">Sale</option>
                <option value="HR">HR</option>
                <option value="Marketing">Marketing</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
              </select>
              {/* {errors.department && 
                      <p className="error">{errors.department?.message}</p>}   */}
            </div>
            <div className="form-group">
              <label>Số ngày nghỉ còn lại: </label>
              <input
                type="number"
                {...register("annualLeave")}
                className="form-control"
                id="annualLeave"
                min="0"
                defaultValue={staffEdit?.annualLeave}
              />

              {errors.annualLeave && (
                <p className="error">{errors.annualLeave?.message}</p>
              )}
            </div>
            <div className="form-group">
              <label>Số ngày làm thêm: </label>
              <input
                type="number"
                {...register("overTime")}
                defaultValue={staffEdit?.overTime}
                className="form-control"
                id="overTime"
                min="0"
              />
              {errors.overTime && (
                <p className="error">{errors.overTime?.message}</p>
              )}
            </div>
            <div className="form-group">
              <label>Hình đại diện</label>
              <input
                type="file"
                placeholder="/assets/images/alberto.png"
                className="form-control-file"
                accept=".gif,.jpg,.jpeg,.png,.doc,.docx"
                name="file"
                id="file"
              />
            </div>

            <button type="submit" className="btn btn-info text-center mt-2">
              Submit
            </button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EditStaff;