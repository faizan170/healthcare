import React from 'react'

function LeftSideDetail() {
    return (
        <div>

            <div class="p-2 w-full font-[roboto] text-[#7C7C7C] max-w-sm bg-white rounded-l-md border border-gray-200 shadow-md sm:p-6 md:p-4 dark:bg-gray-800 dark:border-gray-700">
                <form>
                    <div className='flex'>
                        <h1 class="text-sm  ">Patient Info</h1>
                        <div className='flex items-center ml-2 mr-2'><iconify-icon icon="dashicons:arrow-right-alt2"></iconify-icon></div>
                        <h1 class="text-sm  ">Properties</h1>
                        <div className='flex items-center ml-2 mr-2'><iconify-icon icon="dashicons:arrow-right-alt2"></iconify-icon></div>
                        <h1 class="text-sm  ">Processes</h1>
                    </div>
                    <div className='mt-6 font-bold text-sm'>
                        <p>Select a Patient</p>
                    </div>
                    <div className='mt-6 font-bold text-xs flex'>
                        <p className='mr-2'>PATIENT ID</p>
                        <iconify-icon width="16" height="16" icon="bxs:help-circle"></iconify-icon>
                    </div>

                    <div className="flex">
                        <div className='rounded-l-md flex items-center p-2 bg-[#D9D9D9]'>
                            <iconify-icon width="20" height="20" icon="bxs:user"></iconify-icon>
                        </div>
                        <div className='ml-1'>
                            <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="bg-[#D9D9D9] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-md text-sm px-10 py-2.5 text-center inline-flex items-center text-black" type="button">Place Holder <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                            {/* <!-- Dropdown menu --> */}
                            {/* <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                    <li>
                                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default LeftSideDetail