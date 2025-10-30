
import './css/header.css'

interface HeaderProps{
    title:string
}
const Header = ({title}:HeaderProps) => {
  return (
      <h1 className='heading'>{title}</h1>
  )
}

export default Header