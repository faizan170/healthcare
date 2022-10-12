import React from 'react'
import Detail from '../../Components/Details/Detail'
import Menu from '../../Components/LayoutMenu/Menu'

function HomePage() {
    return (
        <div className='flex w-full bg-[#DFDADA]'>
            <div className='w-[20%] bg-[#FFFFFF] h-screen'>
                <Menu />
            </div>
            <div className='ml-10 flex justify-center items-center'>
                
                   <Detail/>
                
            </div>

        </div>
    )
}

export default HomePage