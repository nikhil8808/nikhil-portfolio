import React from 'react'
import type {ReactNode} from "react"
import './css/description.css'

interface descriptionProps{
    description:string | ReactNode;
}
const Description = ({description}:descriptionProps) => {
  return (
    <p className='description md:w-[80%]'>{description}</p>
  )
}

export default Description