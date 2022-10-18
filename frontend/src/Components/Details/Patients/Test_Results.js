import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Test_result } from '../../../actions/detailsActions';
import UploadFile from './UploadFile/UploadFile';

function Test_Results() {
    const details = useSelector((state) => state.details);
    const dispatch = useDispatch();
    const cmtHandler = (e) => {
        
        dispatch(Test_result({comments: e.target.value }))
    }
    return (
        <div>

            <div className='flex text-[14px] font-bold mt-6 text-[#575757]'>
                <iconify-icon width="20" height="20" icon="bxs:user"></iconify-icon>
                <div className='ml-2'>{details.patient && details.patient.id}</div>
            </div>
            <div className='flex text-[14px] font-bold mt-2 text-[#575757]'>
                <iconify-icon width="20" height="20" icon="eos-icons:test-tube"></iconify-icon>
                <div className='ml-2 '>ECG</div>
            </div>
            <div className='mt-6 font-bold text-xs'>
                <p>Upload Test result here</p>
            </div>
            <div>
                <UploadFile/>
            </div>
            

            <div className='flex flex-col mb-[-200px]' >
                
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

export default Test_Results