import React from 'react'

const More = ({ className = '' }) => {
    return (
        <>
            <div className={`size-[100px] max-lg:size-[92.5px] max-md:size-[85px] max-sm:size-[65px] max-[375px]:!size-[45px] px-[19px] max-[375px]:px-[6px] py-[11px] flex items-center justify-center rounded-[20px] max-[375px]:rounded-[9px] ${className}`}>
                <div className='flex flex-col items-center justify-center'>
                    <p className={`font-poppins font-semibold text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl text-[#666666] `}>
                        +15
                    </p>
                    <p className={`font-poppins text-[#666666] text-base font-normal max-sm:hidden `}>
                        more
                    </p>
                </div>


            </div>
        </>
    )
}

export default More