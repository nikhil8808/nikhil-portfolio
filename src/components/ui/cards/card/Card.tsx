import React, { type ReactNode } from 'react'
import './css/card.css'

interface CardProps{
    title:string;

    icon?:ReactNode;
    body?:ReactNode
}

const Card = ({title,icon,body}:CardProps) => {
  return (
    <div className='card'>
      
            <div className='card-title'>
               <div>
                {icon}
               </div>
                <p>{title}</p>
            </div>
            {body}
        
 


    </div>
  )
}

export default Card