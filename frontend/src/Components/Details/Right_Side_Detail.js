import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

function Right_Side_Detail() {

    const details = useSelector(state => state.details)
    const { patient, symptoms, diagnosis } = details
    const [showDetail, setShowDetail] = useState(true)
    const [showSymptom, setShowSymptom] = useState(true)
    const [showDiagnose, setShowDiagnose] = useState(true)

    return (
        <div className="p-2 font-[roboto] text-[#7C7C7C]  sm:p-6 md:p-4 ">
            <div className='w-60 h-[480px] overflow-auto'>
                <form>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="focus:outline-none text-xs block py-2 pl-2 pr-10 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300    dark:text-white  " placeholder="Search for xyz" required />
                    </div>
                </form>
                <div className='flex w-full mt-4 text-xs h-66'>
                    <div className='w-5 flex items-center text-[#1879B9]'>
                        <iconify-icon widht="15" height="15" icon="bxs:user"></iconify-icon>
                    </div>
                    <div className='flex justify-between  w-full text-[#62A3D0]'>
                        <div className='flex '>
                            Patient Details
                        </div>
                        <div onClick={() => setShowDetail(!showDetail)} className='flex items-center cursor-pointer'>
                            <iconify-icon icon="dashicons:arrow-down-alt2"></iconify-icon>
                        </div>
                    </div>
                </div>
                {/* ----------------Patient detail----------------- */}
                <div className={patient && showDetail ? 'border flex flex-col mt-2 rounded-md' : "hidden"}>
                    <div className='h-72 justify-end overflow-auto flex flex-col p-2' >
                        <div>
                            <label className='text-xs'>Patient Name</label>
                            <div className='flex justify-between'>
                                <p>{patient && patient.name}</p>
                                <p className='text-xs text-[#559CCC]'>change</p>
                            </div>
                        </div>
                        <div className='border-b-2 mt-2 mb-2'></div>
                        <div>
                            <label className='text-xs'>mri_number</label>
                            <div className='flex justify-between'>
                                <p>{patient && patient.mri_number}</p>
                                <p className='text-xs text-[#559CCC]'>change</p>
                            </div>
                        </div>
                        <div className='border-b-2 mt-2 mb-2'></div>
                        <div>
                            <span className='text-xs'>date_of_birth</span>
                            <div className='flex justify-between'>
                                <span>{patient && patient.date_of_birth}</span>
                                <span className='text-xs text-[#559CCC]'>change</span>
                            </div>
                        </div>
                    </div>
                    <button className='flex rounded-b-md justify-center items-center border text-xs p-2 text-[#559CCC]'>View Patient History</button>
                </div>
                <div className='flex w-full mt-2 text-xs'>
                    <div className='w-5 flex items-center text-[#1879B9]'>
                        <iconify-icon widht="15" height="15" icon="icon-park-outline:setting-three"></iconify-icon>
                    </div>
                    <div className='flex justify-between w-full text-[#62A3D0]'>
                        <div>
                            Symptoms
                        </div>
                        <div onClick={() => setShowSymptom(!showSymptom)} className='flex items-center cursor-pointer'>
                            <iconify-icon icon="dashicons:arrow-down-alt2"></iconify-icon>
                        </div>
                    </div>
                </div>
                {/* ----------------Symptoms detail----------------- */}
                <div className={symptoms !== undefined && showSymptom ? 'border mt-2 rounded-md' : "hidden"}>
                    <div className='flex flex-col p-2' >
                        {symptoms !== undefined && symptoms.values.map((item, index) => {
                            return (
                                <div key={index} className={item.checked ? 'flex flex-col mt-2' : "hidden"}>
                                    <label className='text-xs'>Symptom {index + 1}</label>
                                    <div className='flex justify-between'>
                                        <p>{item.checked && item.name}</p>
                                        <p className='text-xs text-[#559CCC]'>change</p>
                                    </div>
                                    <div className='border-b-2 mt-2 mb-2'></div>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <div className='flex w-full mt-2 text-xs'>
                    <div className='w-5 flex items-center text-[#1879B9]'>
                        <iconify-icon widht="15" height="15" icon="material-symbols:battery-full-alt" rotate="90deg"></iconify-icon>
                    </div>
                    <div className='flex justify-between w-full text-[#62A3D0]'>
                        <div>
                            Diagnosis
                        </div>
                        <div onClick={() => setShowDiagnose(!showDiagnose)} className='flex items-center cursor-pointer'>
                            <iconify-icon icon="dashicons:arrow-down-alt2"></iconify-icon>
                        </div>
                    </div>
                </div>
                {/* ----------------Diagnose detail----------------- */}
                <div className={diagnosis && showDiagnose ? 'border flex flex-col mt-2 rounded-md' : "hidden"}>
                    <div className='h-72 justify-end overflow-auto flex flex-col p-2' >
                        <div>
                            <label className='text-xs'>Diagnosis</label>
                            <div className='flex justify-between'>
                                <p>{diagnosis && diagnosis.name}</p>
                                <p className='text-xs text-[#559CCC] cursor-pointer'>change</p>
                            </div>
                        </div>
                        <div className='border-b-2 mt-2 mb-2'></div>
                        <div>
                            <label className='text-xs'>Date of Diagnosis</label>
                            <div className='flex justify-between'>
                                <p>{moment(new Date()).format("DD/MM/YYYY")}</p>
                                <p className='text-xs text-[#559CCC] cursor-pointer'>change</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between gap-1 border rounded-b-md'>
                        <button className=' text-xs p-2 text-[#559CCC]'>View Test Results</button>
                        <button className=' text-xs p-2 text-[#559CCC]'>View Symptoms</button>
                        <button className=' text-xs p-2 text-[#559CCC]'>View Perscription</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Right_Side_Detail