import React from 'react'
import Heading from './common/Heading'
import bgimg from '../assets/webp/blue-section.webp'
import Description from './common/Description'
import { bluesection } from '../utils/helper'

const Bluesection = () => {
  return (
    <div className='pt-[50px] pb-12 mb-[122px] bg-cover bg-center bg-no-repeat ' style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="max-w-[1320px] mx-auto px-3 ">
        <Heading
          text={'Lorem ipsum dolor sit amet, consectetur'}
          className='max-w-[708px] text-center mx-auto text-white leading-[130%] mb-10 '
        />

        <Description
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec '}
          className='max-w-[765px] text-center mx-auto text-white mb-[78px] '
        />

        <div className='max-w-[920px] flex justify-between items-center mx-auto max-[515px]:grid max-[515px]:grid-cols-2 max-[515px]:gap-5 '>
          {bluesection.map((items, index) => (
            <div key={index} className='flex flex-col items-center '>
              <img src={items.icon} alt="icon" draggable='false' />

              <p className='poppins font-bold text-[35px] max-lg:text-[32px] max-md:text-[28px] my-1 text-white '>
                {items.head}
              </p>

              <Description
                text={items.subhead}
                className='text-[18px] uppercase text-white '
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Bluesection