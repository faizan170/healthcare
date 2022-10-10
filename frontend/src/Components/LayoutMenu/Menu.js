import React from 'react'
import 'iconify-icon';
import logo from '../../images/medical.jpg'


function Menu() {
    return (
        <div>
            <div>
                <div className="flex items-center mt-4 py-3 text-lg ml-8 ">
                    <img src={logo} className="h-6 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-[roboto] whitespace-nowrap dark:text-white text-[#3066EC]">Healthcare</span>
                </div>
            </div>
            <div className='overflow-y-auto'>
                <div className='mt-4'>
                    <div className='flex items-center ml-3 mr-3 rounded-lg py-3  cursor-pointer'>
                        <div className='ml-5 flex items-center text-[#BABCBF]'>
                            <span className='font-[roboto]'>
                                MEDICINE
                            </span>
                        </div>
                    </div>
                </div>
                <div className='mt-1'>
                    <div className='flex items-center ml-3 mr-3 rounded-lg py-3  cursor-pointer'>
                        <div className='ml-5 flex items-center text-[#BABCBF]'>
                                <iconify-icon width="20" height="20" icon="icon-park-solid:dashboard-car" rotate="270deg"></iconify-icon>
                            <span className='ml-4  text-[#4E5359] font-[roboto]'>
                                Dashboard
                            </span>
                        </div>
                    </div>
                </div>
                <div className='mt-1'>
                    <div className='flex items-center ml-3 mr-3 rounded-lg py-3  cursor-pointer'>
                        <div className='ml-5 flex items-center text-[#BABCBF]'>
                                <iconify-icon width="20" height="20" icon="healthicons:stethoscope"></iconify-icon>
                            <span className='ml-4  text-[#4E5359] font-[roboto]'>
                                Appointments
                            </span>
                        </div>
                    </div>
                </div>
                <div className='mt-1'>
                    <div className='flex items-center ml-3 mr-3 rounded-lg py-3  cursor-pointer'>
                        <div className='ml-5 flex items-center text-[#BABCBF]'>
                                <iconify-icon width="20" height="20" icon="fontisto:doctor"></iconify-icon>
                            <span className='ml-4  text-[#4E5359] font-[roboto]'>
                                Doctors
                            </span>
                        </div>
                    </div>
                </div>
                <div className='mt-1'>
                    <div className='flex items-center ml-3 mr-3 rounded-lg py-3  cursor-pointer'>
                        <div className='ml-5 flex items-center text-[#BABCBF]'>                            
                                <iconify-icon width="20" height="20" icon="uis:user-md"></iconify-icon>                            
                            <span className='ml-4  text-[#4E5359] font-[roboto]'>
                                Departments
                            </span>
                        </div>
                    </div>
                </div>
                <div className='mt-1'>
                    <div className='flex items-center ml-3 mr-3 rounded-lg py-3  cursor-pointer'>
                        <div className='ml-5 flex items-center text-[#BABCBF]'>                           
                                <iconify-icon width="20" height="20" icon="fa:wheelchair"></iconify-icon>                           
                            <span className='ml-4  text-[#4E5359] font-[roboto]'>
                                Patients
                            </span>
                        </div>
                    </div>
                </div>
                <div className='mt-1'>
                    <div className='flex items-center ml-3 mr-3 rounded-lg py-3  cursor-pointer'>
                        <div className='ml-5 flex items-center text-[#BABCBF]'>                           
                                <iconify-icon width="20" height="20" icon="fluent:payment-24-filled"></iconify-icon>
                            <span className='ml-4  text-[#4E5359] font-[roboto]'>
                                Payments
                            </span>
                        </div>
                    </div>
                </div>
                <div className="border-b-2 ml-4 mt-4 border-[#BABCBF] ..."></div>
                <div className='mt-4'>
                    <div className='flex items-center ml-3 mr-3 rounded-lg py-3  cursor-pointer'>
                        <div className='ml-5 flex items-center text-[#BABCBF]'>
                            <iconify-icon width="20" height="20" icon="bxs:help-circle"></iconify-icon>
                            <span className='ml-4  text-[#4E5359] font-[roboto]'>
                                Help
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Menu