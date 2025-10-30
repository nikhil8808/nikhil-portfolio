import React from 'react'

interface ThemeButtonProps{
    theme:"light"|"dark";
    classes?:string;
    label?:string;
    icon?:any;
    onClick?:()=>void

}

const ThemeButton = ({theme,classes,label,icon,onClick}:ThemeButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={`flex ${classes}  py-2 ${theme==="dark"?"bg-zinc-800 text-zinc-200":"bg-white text-zinc-800"} px-4 md:px-[2rem] shadow-md rounded-full`}>
      {label !="" && label}
      {icon}

    </button>
  )
}

export default ThemeButton