import React from 'react'
import './css/work_card.css'

interface WorkCardProps{
    company_name:string;
    duration:string;
    role:string;

}
const WorkCard = ({company_name,duration,role}:WorkCardProps) => {
  return (
    <div className='flex py-3'>
        <div>

        </div>
        <div className='flex flex-col justify-between w-full'>
            <div>
                <h4 className='text-base font-semibold'>{company_name}</h4>
            </div>
             <div className='flex items-center justify-between text-sm text-gray-500 '>
                 <span className=''>{role}</span>
                 <span>{duration}</span>
             </div>
        </div>

    </div>
  )
}

export default WorkCard