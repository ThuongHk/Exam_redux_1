import {createSelector} from '@reduxjs/toolkit';
export const staffListSelector = state => state.staffList.allStaff;
export const searchStaffSelector = state => state.staffList.searchStaff;
export const departmentSelector = state => state.departmentList?.departments;

export const searchAndStaffSelector = createSelector(staffListSelector,searchStaffSelector, (listStaff, searchList)=>{
return listStaff.filter(sta =>{
    return sta.name.toUpperCase().includes(searchList.toUpperCase());
})
})