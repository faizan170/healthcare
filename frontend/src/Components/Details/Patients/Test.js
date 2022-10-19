import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { _tests } from '../../../actions/detailsActions';
import { tests } from '../../Config/Config';

function Test() {
    
    const details = useSelector((state) => state.details);
    const dispatch = useDispatch();

    const [items, setItems] = useState([])

    useEffect(() => {
        storeValues()
    }, [tests])
    let allValues = []
    const storeValues = () => {

        tests.map((item) => {
            
            allValues.push({ name: item.name, checked: false })
        })
       
        setItems(allValues)
    }
    



    const checkBoxHandler = (e,index) => {

        if (e.target.id === "All") {
            for (const item of items) {
                item.checked = true;
              }          
              setItems([...items]);

        }
        if (e.target.id === "uncheck") {
            for (const item of items) {
                item.checked = false;
              }          
              setItems([...items]);
        }

        if (e.target.id === "default-checkbox") {
            
            if (e.target.checked) {
                items[index].checked = e.target.checked;
                setItems([...items]);


            } else {
                items[index].checked = e.target.checked;
                setItems([...items]);
            }
        }

        
        dispatch(_tests({ value: items}))
    }
    
    const cmtHandler = (e) => {
        dispatch(_tests({  comments: e.target.value }))
    }
  return (
    <div>

            <div className='flex text-[14px] font-bold mt-6 text-[#575757]'>
                <iconify-icon width="20" height="20" icon="bxs:user"></iconify-icon>
                <div className='ml-2'>{details.patient && details.patient.id}</div>
            </div>
            <div className='mt-6 font-bold text-xs'>
                <p>Select a test or multiple tests for your Patient</p>
            </div>
           
           
            <div className= 'flex flex-col mb-[-200px]'>
                <div className="overflow-x-auto relative mt-4 border-2 text-xs  rounded-md">
                    <div className='flex justify-between mx-4 py-2 text-[#575757] font-bold'>
                        <div className=''>Tests</div>
                        <div className='flex items-center gap-1'>Expand <iconify-icon icon="fluent:expand-up-right-16-filled"></iconify-icon></div>
                    </div>
                    <div className='border-b-2 '></div>
                    {items.map((item, index) => {

                        return (

                            <div key={index}>
                                <div className='flex justify-between mx-4 py-2 '>

                                    <div className=''>{item.name}</div>
                                    <div className="flex items-center ">
                                        <input
                                            checked={item.checked}
                                            id="default-checkbox" type="checkbox" value={item.name} onChange={(e) => checkBoxHandler(e,index)} className="w-3 h-3 bg-gray-500 rounded" />
                                    </div>
                                </div>
                                <div className={index === items.length-1 ? "mx-0" : 'border-b-2 mx-4'}></div>
                            </div>
                        )

                    })}
                    <div className='border'></div>
                    <div className='flex justify-between px-4 py-2 text-[#62A3D0]'>
                        <div id="uncheck" className='cursor-pointer' onClick={(e) => checkBoxHandler(e)}>Deselect All</div>
                        <div id="All" className='cursor-pointer' onClick={(e) => checkBoxHandler(e)}>Select All</div>
                    </div>

                </div>
                <div className='font-bold mt-4  flex'>
                    <p className='mr-2 text-xs uppercase'>Comments</p>
                    <iconify-icon width="16" height="16" icon="bxs:help-circle"></iconify-icon>
                </div>
                <textarea id="message"
                    //onChange={(e) => setComment(e.target.value)}
                    onChange={(e) => cmtHandler(e)}
                    rows="1" className="block p-2.5 w-full mt-2 mb-5 text-sm outline-none  text-gray-900 bg-[#FFFFFF] rounded-md border border-gray-300    " placeholder=""></textarea>
            </div>
        </div>
  )
}

export default Test