import React from 'react'

function Right_Side_Detail() {
    return (
        <div className="p-2 font-[roboto] text-[#7C7C7C]  sm:p-6 md:p-4 ">
            <div className='w-60'>
                <form>

                    <div className="relative">
                        <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="focus:outline-none text-xs block py-2 pl-2 pr-10 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300    dark:text-white  " placeholder="Search for xyz" required />

                    </div>
                </form>

                <div className='flex w-full mt-4 text-xs '>
                    <div className='w-5 flex items-center text-[#1879B9]'>
                        <iconify-icon widht="15" height="15" icon="bxs:user"></iconify-icon>
                    </div>
                    <div className='flex justify-between  w-full text-[#62A3D0]'>
                        <div className='flex '>
                            Patient Details
                        </div>
                        <div className='flex items-center'>
                            <iconify-icon icon="dashicons:arrow-down-alt2"></iconify-icon>
                        </div>
                    </div>
                </div>
                <div className='flex w-full mt-2 text-xs'>
                    <div className='w-5 flex items-center text-[#1879B9]'>
                        <iconify-icon widht="15" height="15" icon="icon-park-outline:setting-three"></iconify-icon>
                    </div>
                    <div className='flex justify-between w-full text-[#62A3D0]'>
                        <div>
                            Symptoms
                        </div>
                        <div className='flex items-center'>
                            <iconify-icon icon="dashicons:arrow-down-alt2"></iconify-icon>
                        </div>
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
                        <div className='flex items-center'>
                            <iconify-icon icon="dashicons:arrow-down-alt2"></iconify-icon>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Right_Side_Detail