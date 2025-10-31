import { type ReactNode } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/layout/footer/Footer'
import './main_layout.css'

interface MainLayoutProps{
    children:ReactNode
}
const MainLayout:React.FC<MainLayoutProps> = ({children}:MainLayoutProps) => {
  return (
    <div className='w-full h-full  main md:px-[4rem] md:py-[0.5rem]  flex  relative'>


    <div className='w-full wrapper md:w-[80vw] md:px-[4rem] px-[1rem]  md:py-[0.5rem] min-h-[100vh] relative'>
        <Navbar />
        <div>
          {children}
        </div>
        <Footer />
    
    </div>
</div>
  )
}

export default MainLayout