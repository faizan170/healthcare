import React, { useState } from 'react'
import Detail from './Detail'
import RightSideDetail from './LeftSideDetail'
import LeftSideDetail from './RightSideDetail'
import SecondImage from './SecondPage'


function FirstImage() {
    


    return (
        <div className='flex flex-col rounded-md bg-[#FFFFFF]'>
            <div>
                <div className=' flex'>

                    <RightSideDetail
                        firstText={"Select a Patient"}
                        secondText={"PATIENT ID"}
                        dropDownIcon={"bxs:user"}
                        dropDownText={"Place Holder"}
                    />
                    <LeftSideDetail />

                </div>
            </div>
            <div>
                <button  className='w-full bg-[#5FA8A3] rounded-b-md text-white py-2.5 text-xs'>Done</button>
            </div>
        </div>
    )
}

export default FirstImage