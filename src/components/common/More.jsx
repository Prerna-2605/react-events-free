import React from 'react'

const More = ({ className = '' }) => {
    return (
        <>
            <div className={`w-[100px] h-[100px] px-[19px] py-[11px]  rounded-[20px] ${className}`}>
                <div className='flex flex-col items-center justify-center'>
                    <p className={`font-poppins font-semibold text-4xl text-[#666666] `}>
                        +15
                    </p>
                    <p className={`font-poppins text-[#666666] text-base font-normal `}>
                        more
                    </p>
                </div>


            </div>
        </>
    )
}

export default More