import React from 'react'
import RightSideDetail from './LeftSideDetail'
import LeftSideDetail from './RightSideDetail'

function ThirdPage() {
  return (
    <div className='flex flex-col rounded-md bg-[#FFFFFF]'>
    <div>
        <div className=' flex'>

        <RightSideDetail
                        firstText={"Select department"}
                        number={"52-63-15"}
                        userIcon={"bxs:user"}
                        secondText={"DEPARTMENT"}
                        dropDownIcon={"bx:plus-medical"}
                        dropDownText={"Cardiology"}
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

export default ThirdPage