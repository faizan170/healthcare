import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { _Diagnosis, _Treatment } from '../../../actions/detailsActions';
import { diagnosis, treatment } from '../../Config/Config'
import { data as Config } from '../../Config/base'
import makeAnimated from 'react-select/animated';
import Select from 'react-select'
function Diagnosis() {
    const animatedComponents = makeAnimated();
    const details = useSelector((state) => state.details);
    const data = useSelector(state => state.details)
    const { diagnosis, treatment}=Config[data.use_case]
    const [items, setItems] = useState([])
    const [Diagnose, setDiagnose] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        storeValues()
    }, [treatment])
    let allValues = []
    const storeValues = () => {

        treatment.map((item) => {

            allValues.push({ name: item.name, checked: false })
        })

        setItems(allValues)
    }


    const handleChange = (e) => {
        setDiagnose(e)
        //dispatch(_Diagnosis({ name: e }))
    }



    const checkBoxHandler = (e, index) => {

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
        dispatch(_Treatment({ value: items }))

    }


    const cmtHandler = (e) => {

        dispatch(_Treatment({ comments: e.target.value }))
    }

    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    //   ]

    const options = diagnosis.map((item) => {
        return { value: item.name, label: item.name }
    })
    return (
        <div>

            <div className='flex text-[14px] font-bold mt-6 text-[#575757]'>
                <iconify-icon width="20" height="20" icon="bxs:user"></iconify-icon>
                <div className='ml-2'>{details.patient && details.patient.id}</div>
            </div>

            <div className='mt-6 font-bold  flex'>
                <p className='mr-2 text-xs'>DIAGNOSIS</p>
                <iconify-icon width="16" height="16" icon="bxs:help-circle"></iconify-icon>
            </div>
            <div className="mt-2 flex">

                <div className="rounded-l-md flex items-center p-2 bg-[#D9D9D9] text-gray-700">
                    <iconify-icon width="20" height="20" icon="bxs:battery" rotate="270deg"></iconify-icon>
                </div>
                <div className='ml-1 md:w-full flex flex-col'>
                    <div className='flex justify-center items-center bg-[#D9D9D9] text-sm'>
                        {/* <select value={Diagnose} onChange={(e) => handleChange(e)} className="text-gray-900 text-sm w-full bg-[#D9D9D9] outline-none p-2.5 ">
                            <option defaultValue>Select Diagnosis</option>
                            {diagnosis.map((item, index) => {
                                return (<option key={index} value={item.name}>{item.name}</option>)
                            })}
                        </select> */}
                        <Select closeMenuOnSelect={false} className="text-gray-900 text-sm w-full bg-[#D9D9D9] outline-none"
                            components={animatedComponents}
                            onChange={(e) => handleChange(e)}
                            isMulti options={options} />
                        
                    </div>
                </div>
            </div>
            <div className={Diagnose.length > 0 ? 'flex flex-col mb-[-200px]' : "hidden"}>
                <div className="overflow-x-auto relative mt-4 border-2 text-xs  rounded-md">
                    <div className='flex justify-between mx-4 py-2 text-[#575757] font-bold'>
                        <div>Treatment</div>
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

export default Diagnosis