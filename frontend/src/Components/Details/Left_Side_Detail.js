import React from 'react'

function Left_Side_Detail(props) {
    return (
        <div className=" ">
            <form>
                {/* <div className='flex text-[12px]'>
          <h1 >Patient Info</h1>
          <div className='flex items-center ml-2 mr-2'><iconify-icon icon="dashicons:arrow-right-alt2"></iconify-icon></div>
          <h1 >Properties</h1>
          <div className='flex items-center ml-2 mr-2'><iconify-icon icon="dashicons:arrow-right-alt2"></iconify-icon></div>
          <h1 >Processes</h1>
        </div> */}
                <div className={props.userIcon ? 'flex text-[14px] font-bold mb-[-12px] mt-6' : "hidden"}>
                    <iconify-icon width="20" height="20" icon={props.userIcon}></iconify-icon>
                    <div className='ml-2'>{props.number}</div>
                </div>
                <div className='mt-6 font-bold text-xs'>
                    <p>{props.firstText}</p>
                </div>
                <div className='mt-6 font-bold  flex'>
                    <p className='mr-2 text-xs'>{props.secondText}</p>
                    <iconify-icon width="16" height="16" icon="bxs:help-circle"></iconify-icon>
                </div>

                <div className="mt-2 flex">

                    <div className={`rounded-l-md flex items-center p-2 ${props.dropDownIconBgColor ? "bg-[#4E4E4E] text-white" : "bg-[#D9D9D9]"} `}>
                        <iconify-icon width="20" height="20" icon={props.dropDownIcon}></iconify-icon>
                    </div>
                    <div className='ml-1 md:w-full flex flex-col '>

                        {/* --------------Place holder---------- */}
                        <div className='flex justify-center items-center bg-[#D9D9D9] text-sm'>

                            <input class={`py-2.5  w-full ml-2 outline-none text-[#525252] ${props.dropDownIconBgColor ? "bg-[#FFFFFF] text-[#7C7C7C] border-2" : "bg-[#D9D9D9]"}`} placeholder="Place Holder"></input>

                            <div className='cursor-pointer'>
                                <iconify-icon width="25" height="25" icon="gridicons:dropdown"></iconify-icon>
                            </div>
                            {/* <select value={""}>
                                <option value="A">Apple</option>
                                <option value="B">Banana</option>
                                <option value="C">Cranberry</option>
                            </select> */}

                        </div>
                        {/* <button id="dropdownDefault" data-dropdown-toggle="dropdown" className={`w-full font-semibold text-[#525252]  ${props.dropDownIconBgColor ? "bg-[#FFFFFF] text-[#7C7C7C] border-2" : "bg-[#D9D9D9]"}  focus:outline-none rounded-r-md text-[10px] md:text-xs px-2  py-2.5 text-center inline-flex justify-between items-center `} type="button">{props.dropDownText} <svg className="ml-20 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button> */}
                        <div className={props.dropDownIconBgColor ? 'border-2 mt-1' : "hidden"}>
                            {["Cardiology", "Orthopaedics", "Gastroenterology", "Urology", "Nephrology", "Ophthalmology"].map((item, index) => {

                                return (
                                    <div className='text-sm'>
                                        <div className='py-1 ml-2'>{item}</div>
                                        <div className={index === 5 ? "border-b-0" : 'border-b-2'}></div>
                                    </div>
                                )

                            })}
                            <div className='bg-[#E8E8E8] flex items-center justify-center text-xs py-2'>
                                <iconify-icon icon="heroicons-outline:plus-sm"></iconify-icon>
                                Add New
                            </div>
                        </div>

                    </div>


                </div>

                {/* -------------Department Table Detail------------- */}
                <div className={props.dropDownText === "Cardiology" ? 'flex flex-col mb-[-200px]' : "hidden"}>
                    <div class="overflow-x-auto relative mt-4 border-2 text-xs  rounded-md">
                        <div className='flex justify-between mx-4 py-2'>
                            <div>Symptoms</div>
                            <div className='flex items-center gap-1'>Expand <iconify-icon icon="fluent:expand-up-right-16-filled"></iconify-icon></div>
                        </div>
                        <div className='border-b-2 '></div>
                        {["Chest Pain", "Apprehension", "Shortness of breath", "Palpitation", "Pressure chest"].map((item, index) => {

                            return (

                                <div>
                                    <div className='flex justify-between mx-4 py-2 '>

                                        <div className=''>{item}</div>
                                        <div class="flex items-center ">
                                            <input id="default-checkbox" type="checkbox" value="" class="w-3 h-3 bg-gray-500 rounded" />
                                        </div>
                                    </div>
                                    <div className={index === 4 ? "mx-0" : 'border-b-2 mx-4'}></div>
                                </div>
                            )

                        })}
                        <div className='border'></div>
                        <div className='flex justify-between px-4 py-2 text-[#62A3D0]'>
                            <div>Deselect All</div>
                            <div>Select All</div>
                        </div>

                    </div>
                    <div className='font-bold mt-4  flex'>
                        <p className='mr-2 text-xs uppercase'>Comments</p>
                        <iconify-icon width="16" height="16" icon="bxs:help-circle"></iconify-icon>
                    </div>
                    <textarea id="message" rows="1" class="block p-2.5 w-full mt-2 mb-5 text-sm outline-none  text-gray-900 bg-[#FFFFFF] rounded-md border border-gray-300    " placeholder=""></textarea>
                </div>

                {/* -------------Next Button------------- */}
                {/* <div className='mt-[200px] flex justify-center items-center'>
          <button className="md:w-full text-white bg-[#4E4E4E]  font-medium rounded-md text-xs px-20 md:px-[150px] py-2.5 text-center inline-flex items-center" type="button">Next <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></button>
        </div> */}

            </form >
        </div >
    )
}

export default Left_Side_Detail