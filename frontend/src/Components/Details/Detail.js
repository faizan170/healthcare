import React, { useState } from 'react'
import Patients from './Patients/Patients'
import Department from './Patients/Department'
import Right_Side_Detail from './Right_Side_Detail'
import Comobidity from './Patients/Comobidity'
import Test from './Patients/Test'
import Test_Results from './Patients/Test_Results'
import Diagnosis from './Patients/Diagnosis'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Detail() {
    const details = useSelector(state => state.details)
    const { patient, department,symptoms, comobibity, tests, test_results, diagnosis, treatment } = details
    console.log(details)
    const screens = [
        <Patients />,
        <Department />,
        <Comobidity />,
        <Test />,
        <Test_Results />,
        <Diagnosis />
    ]
    const [curent_screen, setCurrentScreen] = useState(0)

    const onButtonClick = () => {

        console.log(curent_screen)
        if(curent_screen===0){
            if(patient){
                setCurrentScreen((prevIndex) => {
                    if (prevIndex === screens.length - 1)
                        return 0
                    else
                        return prevIndex + 1
                })   
            }else{
                setCurrentScreen(curent_screen) 
            }
        }
        if(curent_screen===1){
            if(department && symptoms){
                setCurrentScreen((prevIndex) => {
                    if (prevIndex === screens.length - 1)
                        return 0
                    else
                        return prevIndex + 1
                })   
            }else{
                setCurrentScreen(curent_screen) 
            }
        }
        if(curent_screen===2){
            if(comobibity){
                setCurrentScreen((prevIndex) => {
                    if (prevIndex === screens.length - 1)
                        return 0
                    else
                        return prevIndex + 1
                })   
            }else{
                setCurrentScreen(curent_screen) 
            }
        }
        if(curent_screen===3){
            if(tests){
                setCurrentScreen((prevIndex) => {
                    if (prevIndex === screens.length - 1)
                        return 0
                    else
                        return prevIndex + 1
                })   
            }else{
                setCurrentScreen(curent_screen) 
            }
        }
        if(curent_screen===4){
            if(test_results){
                setCurrentScreen((prevIndex) => {
                    if (prevIndex === screens.length - 1)
                        return 0
                    else
                        return prevIndex + 1
                })   
            }else{
                setCurrentScreen(curent_screen) 
            }
        }
        if(curent_screen===5){
            if(diagnosis && treatment){
                setCurrentScreen((prevIndex) => {
                    if (prevIndex === screens.length - 1)
                        return 0
                    else
                        return prevIndex + 1
                })   
            }else{
                setCurrentScreen(curent_screen) 
            }
        }
    }
   


    return (
        <div className='flex flex-col rounded-lg w-[70%] h-[80%] bg-[#FFFFFF]'>
                <div className=' flex font-[roboto]  '>
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
                        <div className='overflow-auto ' style={{
                            height: 'calc(100% - 50px)'
                        }}>
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
                        <Right_Side_Detail />
                    </div>

                </div>
            <div>
                <button className='w-full bg-[#5FA8A3] rounded-b-md text-white py-2.5 text-xs'>Done</button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Detail