import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';

function UploadFile() {
    const [images, setImages] = useState([])
    const onDrop = useCallback(acceptedFiles => {
        let user_temp = [...images];
        for (var i = 0; i < acceptedFiles.length; i++) {
            user_temp.push({ status: "queue", file: acceptedFiles[i] })
        }

        setImages(user_temp)

    }, [images])

    const { acceptedFiles, getRootProps, getInputProps, fileRejections, } = useDropzone(
        {
            onDrop,
            multiple: true,
        }
    );
    console.log(images)
    return (
        <div className='flex justify-center'>
            <div {...getRootProps()}
                className='w-full flex justify-center items-center bg-[#E8E8E8] border-2 border-[#8E8E8E] border-dashed mt-4 h-[100px] '

            >
                <input {...getInputProps()} />
                <div className='flex flex-col justify-center items-center text-sm'>
                    <p>Drop PDF here</p>
                    <p>or</p>
                    <button  className='border border-[#8E8E8E]  bg-[#FFFFFF]  rounded-md text-sm pt-1 pb-1 pl-3 pr-3  mt-2 '  >
                        Select Files
                    </button>
                </div>

            </div>

        </div>
    )
}

export default UploadFile