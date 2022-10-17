import React, { useState } from 'react'
import Patients from './Patients/Patients'
import Department from './Patients/Department'
import Right_Side_Detail from './Right_Side_Detail'
import Comobidity from './Patients/Comobidity'
import Test from './Patients/Test'


function Detail() {

    // const screens = [
    //     "patients",
    //     "departments",

    // ]
    const screens = [
        <Patients />,
        <Department />,
        <Comobidity />,
        <Test/> 
    ]

    const comps = {
        patients: <Patients />,
        departments: <Department />,
    }


    const [curent_screen, setCurrentScreen] = useState(0)

    const onButtonClick = () => {
        console.log(screens)
        setCurrentScreen((prevIndex) => {
            if (prevIndex === screens.length)
                return 0
            else
                return prevIndex + 1
          })
        //setCurrentScreen("departments")
    }
    
    
    return (
        <div className='flex flex-col rounded-md bg-[#FFFFFF] '>
            <div>
                <div className=' flex font-[roboto]  '>
                    {/* --------- 1st image ----------------- */}
                    {/* <RightSideDetail 
                    firstText={"Select a Patient"}
                    secondText={"PATIENT ID"}
                    dropDownIcon={"bxs:user"}
                    dropDownText={"Place Holder"}
                    /> */}
                    {/* --------- 2nd image ----------------- */}
                    {/* <RightSideDetail 
                    firstText={"Select department"}
                    number={"52-63-15"}
                    userIcon={"bxs:user"}
                    secondText={"DEPARTMENT"}
                    dropDownIcon={"bx:plus-medical"}
                    dropDownText={"Place Holder"}
                    /> */}
                    {/* --------- 3rd image ----------------- */}
                    {/* <RightSideDetail
                        firstText={"Select department"}
                        number={"52-63-15"}
                        userIcon={"bxs:user"}
                        secondText={"DEPARTMENT"}
                        dropDownIcon={"bx:plus-medical"}
                        dropDownText={"Cardiology"}
                    /> */}
                    {/* --------- 4rth image ----------------- */}


                    {/* <RightSideDetail
                        firstText={"Select department"}
                        number={"52-63-15"}
                        userIcon={"bxs:user"}
                        secondText={"DEPARTMENT"}
                        dropDownIconBgColor={"black"}
                        dropDownIcon={"bx:plus-medical"}
                        dropDownText={"Place Holder"}
                    /> */}


                    {/* --------- 5th image ----------------- */}


                    {/* <RightSideDetail
                        firstText={"Select a patient"}                        
                        secondText={"PATIENT ID"}
                        dropDownIconBgColor={"black"}
                        dropDownIcon={"bxs:user"}
                        dropDownText={"52-63-54"}
                    /> */}

                    {/* --------- 6th image ----------------- */}


                    {/* <RightSideDetail
                        firstText={"Select a patient"}
                        number={"52-63-15"}
                        userIcon={"bxs:user"}                        
                        
                    /> */}



                    {/*------------ Right Side Detail ------------------*/}

                    <div className="relative p-2 w-full h-[80vh]  text-[#7C7C7C]  rounded-tl-md  border  shadow-md sm:p-6 md:p-4 ">
                        {/*------------ Header ------------------*/}
                        <div className='flex text-[12px]'>
                            <h1 >Patient Info</h1>
                            <div className='flex items-center ml-2 mr-2'><iconify-icon icon="dashicons:arrow-right-alt2"></iconify-icon></div>
                            <h1 >Properties</h1>
                            <div className='flex items-center ml-2 mr-2'><iconify-icon icon="dashicons:arrow-right-alt2"></iconify-icon></div>
                            <h1 >Processes</h1>
                        </div>

                        {/*------------ Body ------------------*/}
                        {/* <Patients/>
                        <Patient_Id /> */}
                        <div className='h-[400px] overflow-auto '>
                            {
                                screens[curent_screen]
                            }
                        </div>

                        {/*------------ Footer Next Button ------------------*/}
                        <div className=' bottom-0 flex justify-center items-center'>
                            <button onClick={onButtonClick} className="md:w-full text-white bg-[#4E4E4E]  font-medium rounded-md text-xs px-20 md:px-[150px] py-2.5 text-center inline-flex items-center" type="button">Next <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></button>
                        </div>
                    </div>

                    {/*------------ Left Side Detail ------------------*/}

                    <div>
                        {/* <LeftSideDetail /> */}
                        <Right_Side_Detail />
                    </div>

                </div>
            </div>
            <div>
                <button className='w-full bg-[#5FA8A3] rounded-b-md text-white py-2.5 text-xs'>Done</button>
            </div>
        </div>
    )
}

export default Detail