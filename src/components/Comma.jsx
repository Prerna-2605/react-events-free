import React from 'react'
import Description from './common/Description'
import commas from '../assets/svg/comma.svg'

const Comma = () => {
    return (
        <div className='max-w-[1320px] mx-auto mb-[77px] px-3 '>
            <div className='flex flex-wrap items-center max-lg:flex-col-reverse max-lg:gap-6 '>
                <div className='w-1/2 px-3 max-lg:w-full '>
                    <img src={commas} alt="image" draggable='false' className='mb-[22px] max-lg:hidden ' />

                    <Description
                        className='leading-[1.8] '
                        text={"Semper faucibus suscipit ultricies eleifend semper sit tellus gravida pretium. Cras cursus ut semper eleifend tortor lectus tristique turpis. Laoreet amet ultrices est lectus accumsan nibh cursus nunc. Faucibus orci, neque, pretium, massa volutpat convallis nisl pellentesque. Gravida in ultrices vitae tortor. Dignissim viverra volutpat neque gravida aliquet urna faucibus viverra vulputate. nibh cursus nunc. Faucibus orci, neque, pretium, massa volutpat convallis nisl pellentesque. Gravida in ultrices vitae tortor. Dignissim viverra volutpat neque gravida aliquet urna faucibus viverra vulputate."}
                    />
                </div>

                <div className='w-1/2 px-3 flex max-lg:w-full flex-col '>
                    <img src={commas} alt="image" draggable='false' className='mb-[22px] lg:hidden max-w-[118px] ' />

                    <iframe width="619" className='rounded-[30px] max-lg:mx-auto max-w-[620px] w-full max-sm:h-[70%] ' height="415" src="https://www.youtube.com/embed/asMHYCnMb-Q?si=VYC1VHuh_IJv3KG7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Comma