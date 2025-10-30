import React, { type ReactHTMLElement, type ReactNode } from 'react'
import { useState } from 'react'


 interface ModalProps{
    show:boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    headerSection?:ReactNode;
    body?:ReactNode
    footer?:ReactNode;
    classes?:string;

 }
const Modal = ({show,setShow,headerSection,body,footer,classes}:ModalProps) => {
    
    const toggalModal=()=>{
        setShow((prev:boolean)=>!prev)

    }


  return (
 
    <div id="default-modal" tabIndex={-1} aria-hidden="true" className={` ${classes} ${show?"":"hidden"}  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
    <div className="relative p-4 w-full max-w-2xl max-h-full flex justify-center">
       
        <div className=" mobile_menu p-[1.7rem] w-[89vw] rounded-2xl shadow-sm ">

            {/* header section */}
           {headerSection}

            {/* body content */}
            {body}

            {/* footer content */}
            {footer}
        
      
        </div>
    </div>
</div>
  )
}

export default Modal