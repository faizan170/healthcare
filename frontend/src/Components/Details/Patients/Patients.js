import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { patient } from '../../../actions/detailsActions'
// import { patients } from '../../Config/Config'
import Config from '../../Config/base'


function Patients() {
    const data = useSelector(state => state.details)
    const { patients } = Config[data.use_case]

    const [PatientId, setPatientId] = useState()
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setPatientId(e.target.value)
    }
    
    useEffect(()=>{
        patients.map((user) => {
            if (user.id === PatientId) {
                dispatch(patient(user));
            }
        })
    },[PatientId])
    return (
        <div>
            <div className='mt-6 font-bold text-xs'>
                <p>Select a Patient</p>
            </div>
            <div className='mt-6 font-bold  flex'>
                <p className='mr-2 text-xs'>PATIENT ID</p>
                <iconify-icon width="16" height="16" icon="bxs:help-circle"></iconify-icon>
            </div>
            <div className="mt-2 flex">

                <div className="rounded-l-md flex items-center p-2 bg-[#D9D9D9] text-gray-700">
                    <iconify-icon width="20" height="20" icon="bxs:user"></iconify-icon>
                </div>
                <div className='ml-1 md:w-full flex flex-col '>
                    <div className='flex justify-center items-center bg-[#D9D9D9] text-sm'>
                        <select value={PatientId} onChange={(e) => handleChange(e)} className="text-gray-900 text-sm w-full bg-[#D9D9D9] outline-none p-2.5 ">
                            <option defaultValue>Select a Patient</option>
                            {patients.map((user) => {
                                return (<option key={user.id} value={user.id}>{user.id}</option>)
                            })}
                        </select>
                    </div>
                </div>
            </div>
        </div>
        // <Left_Side_Detail
        //     firstText={"Select a Patient"}
        //     secondText={"PATIENT ID"}
        //     dropDownIcon={"bxs:user"}
        //     dropDownText={"Place Holder"}
        // />
    )
}

export default Patients