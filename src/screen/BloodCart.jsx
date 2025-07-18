import React from 'react'
import { donorFeatures } from '../constant/donor_features'

function BloodCart() {
  return (
    <div>
        <div className=' text-center text-[24px] mt-2 ' >
            <strong>Thousands of Donors, One Click Away</strong>
        </div>
        <div className=' flex  flex-wrap justify-around  mt-3  ' >
           {
            donorFeatures.map((item)=>(
                     <div className=' border-2 border-red-600 w-[250px] mt-5 h-[300px] rounded-[20px]  ' >
                <div className=' border-2 h-[200px] rounded-[20px] ' >
                    <img src={item.img} alt={item.name} className=' h-full w-full rounded-[20px] ' />
                </div>
                <div>
                    <p className=' text-center mt-2 font-serif text-gray-500 ' >{item.name}</p>
                </div>
                </div>
            ))
           }
        </div>
    </div>
  )
}

export default BloodCart