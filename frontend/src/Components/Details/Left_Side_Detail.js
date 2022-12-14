import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Suspected_diseases, department, Symptoms, _tests } from '../../actions/detailsActions';
// import { departments, symptoms } from '../Config/Config';
// import {data as Config } from '../../Config/base'
import { data as Config } from '../Config/base'

function Left_Side_Detail(props) {
    const [Department, setDepartment] = useState()
    const details = useSelector((state) => state.details);
    const data = useSelector(state => state.details)
    const [items, setItems] = useState([])
    const { symptoms, comobibity } = details
    const { departments } = Config[data.use_case]
    //const Symptoms = Config[data.use_case].symptoms


    console.log(props)

    useEffect(() => {
        setItems(props.table_values)
    }, [props.table_values])
   
    const dispatch = useDispatch();
    const handleChange = (e) => {

        setDepartment(e.target.value)
        dispatch(department({ name: e.target.value }))
    }



    const checkBoxHandler = (e, index) => {


        console.log(e.target.checked)

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
        console.log(items)
        if (props.table_header === "Suspected Diseases") {
            return dispatch(Suspected_diseases({ value: items }))
        } else if (props.table_header === "Tests") {
            return dispatch(_tests({ value: items }))
        } else {
            return dispatch(Symptoms({ value: items }))
        }
    }


    const cmtHandler = (e) => {


        if (props.table_header === "Suspected Diseases") {
            return dispatch(Suspected_diseases({ comments: e.target.value }))
        } else if (props.table_header === "Tests") {
            console.log("comodity")
            return dispatch(_tests({ comments: e.target.value }))
        } else {
            return dispatch(Symptoms({ comments: e.target.value }))
        }

    }
    return (
        <div>

            <div className='flex text-[14px] font-bold mt-6 text-[#575757]'>
                <iconify-icon width="20" height="20" icon="bxs:user"></iconify-icon>
                <div className='ml-2'>{details.patient && details.patient.id}</div>
            </div>
            <div className={props.pargraph_text ? 'hidden' : "flex flex-col"}>
                <div className='mt-6 font-bold text-xs'>
                    <p>Select department</p>
                </div>
                <div className='mt-6 font-bold  flex'>
                    <p className='mr-2 text-xs'>DEPARTMENT</p>
                    <iconify-icon width="16" height="16" icon="bxs:help-circle"></iconify-icon>
                </div>
                <div className="mt-2 flex">

                    <div className="rounded-l-md flex items-center p-2 bg-[#D9D9D9] text-gray-700">
                        <iconify-icon width="20" height="20" icon="bx:plus-medical"></iconify-icon>
                    </div>
                    <div className='ml-1 md:w-full flex flex-col '>
                        <div className='flex justify-center items-center bg-[#D9D9D9] text-sm'>
                            <select value={Department} onChange={(e) => handleChange(e)} className="text-gray-900 text-sm w-full bg-[#D9D9D9] outline-none p-2.5 ">
                                <option defaultValue>Select a Department</option>
                                {departments.map((item, index) => {
                                    return (<option key={index} value={item.name}>{item.name}</option>)
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className={props.pargraph_text ? "mt-2 font-bold text-xs" : "hidden"}>
                <p>{props.pargraph_text}</p>
            </div>
            <div className={Department || props.pargraph_text ? 'flex flex-col mb-[-200px]' : "hidden"}>
                <div className="overflow-x-auto relative mt-4 border-2 text-xs  rounded-md">
                    <div className='flex justify-between mx-4 py-2 text-[#575757] font-bold'>
                        <div>{props.pargraph_text ? props.table_header : "Symptoms"}</div>
                        <div className='flex items-center gap-1'>Expand <iconify-icon icon="fluent:expand-up-right-16-filled"></iconify-icon></div>
                    </div>
                    <div className='border-b-2 '></div>
                    {props.table_values.map((item, index) => {

                        return (

                            <div key={index}>
                                <div className='flex justify-between mx-4 py-2 '>

                                    <div className=''>{item.name}</div>
                                    <div className="flex items-center ">
                                        <input

                                            checked={item.checked}
                                            id="default-checkbox" type="checkbox" value={item.name} onChange={(e) => checkBoxHandler(e, index)} className="checkbox w-3 h-3 bg-gray-500 rounded" />
                                    </div>
                                </div>
                                <div className={index === items.length - 1 ? "mx-0" : 'border-b-2 mx-4'}></div>
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

export default Left_Side_Detail