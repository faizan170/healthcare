import React from 'react'
import LeftSideDetail from '../../Components/Details/LeftSideDetail'
import RightSideDetail from '../../Components/Details/RightSideDetail'
import Menu from '../../Components/LayoutMenu/Menu'

function HomePage() {
    return (
        <div className='flex w-full bg-[#DFDADA]'>
            <div className='w-[20%] bg-[#FFFFFF] h-screen'>
                <Menu />
            </div>
            <div className='ml-10 flex justify-center items-center'>
                
                    <LeftSideDetail />
                
                <div className="border-r-2  border-[#BABCBF] ..."></div>
                
                    {/* <RightSideDetail /> */}
                
            </div>

        </div>
    )
}

export default HomePage