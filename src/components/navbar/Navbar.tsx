import React,{useState,useContext} from 'react'
import { Link ,useNavigate,useLocation} from 'react-router-dom'
import ThemeButton from '../ui/button/ThemeButton'
import Modal from '../ui/modal/Modal'
import {useTheme} from "../../context/ThemeContextProvider"
import './css/navbar.css'




interface Link{
  name:string;
  path:string
}

const Navbar = () => {
  const {theme,toggleTheme}=useTheme()
  const [show,setShow]=useState(false)
  const location=useLocation()


  const handleMenuToggle=()=>{
    console.log("Modal Toggle")
    setShow((prev)=>!prev)

  }
  const navigate=useNavigate()

  const links:Link[]=[
    {
      name:"Home",
      path:"/"
    },
      {
      name:"About",
      path:"/about"
    },
       {
      name:"Projects",
      path:"/projects"
    },
         {
      name:"Education",
       path:"/education"
    },
  ]
  const handleNavigation=(path:string)=>{
  setShow(false)

   navigate(path)
  }

  return (
    <>
    <div className='flex justify-between h-[5rem] w-full items-center     '>
      {/* Left Section (Logo or Title) */}
      <div className='text-xl font-bold'>
 
      </div>

      {/* Middle Section (Nav Links) */}
      <div className='hidden md:flex items-center gap-[1.5rem] nav py-2 px-[2rem] shadow-md rounded-full'>

        {links?.map((link:Link,index:number)=>{

          return <Link key={link?.name} to={link?.path} className={`hover:text-teal-500 transition ${location?.pathname===link?.path?"text-teal-500":""} `}>{link?.name}</Link>
        })}

      </div>

      {/* Right Section (Theme + Menu Buttons) */}
      <div className='flex items-center gap-2'>
        {/* Menu Button */}
        <ThemeButton
          theme={theme}
          label="Menu"
          classes='md:hidden'
          onClick={handleMenuToggle}
          icon={
            <svg
              viewBox="0 0 8 6"
              aria-hidden="true"
              className="ml-2 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
            >
              <path
                d="M1.75 1.75 4 4.25l2.25-2.5"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />

        {/* Theme Toggle Button */}
        <ThemeButton
          theme={theme}
          onClick={toggleTheme}
       
          icon={
            theme === 'light' ? (
              <svg
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden"
              >
                <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8a4.25 4.25 0 0 1 4.25 4.25 4.25 4.25 0 0 1-4.25 4.25A4.25 4.25 0 0 1 8 12.25Z"></path>
                <path
                  d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77L5.709 5.709M6.77 17.73l-1.061 1.061"
                  fill="none"
                ></path>
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 fill-zinc-700 stroke-teal-500 transition dark:block"
              >
                <path
                  d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )
          }
        />
      </div>
    </div>
    <Modal 
    show={show}
    setShow={setShow}
    headerSection={<>
        <div className="flex items-center justify-between  md:p-5 rounded-t   ">
                <p className="text-md font-semibold text-gray-900 dark:text-white">
                   Navigation
                </p>
                <button type="button" onClick={handleMenuToggle} className=" bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
          </div>
    </>}

    body={<>
    <div className=''>
      {links?.map((link:Link,index:number)=>{

        return   <div onClick={()=>handleNavigation(link?.path)} className={index<(links?.length-1)?`nav-link border-b py-3 cursor-pointer border-gray-300`:'nav-link py-3 cursor-pointer'}>
                    <span className='text-md'>{link?.name}</span>
                 </div>
             
             })}
 

    </div>
    
    
    </>}
    />
    </>
  )
}

export default Navbar
