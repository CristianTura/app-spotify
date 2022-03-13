import Logo from '../assets/img/music.png';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate()

  const redirectHome = () => {
    navigate('/')
  }

  return (
    <header className=''>
        <img className='logo py-3 pointer' src={Logo} alt="Logo" onClick={ redirectHome }/>
    </header>
  )
}
