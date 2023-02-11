import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-list-item'><span>News</span></li>
        <li className='navbar-list-item'><Link to={'portfolio'}>Portfólio</Link></li>
        <li className='navbar-list-item'><Link to={'articles'}>Artigos</Link></li>
        <li className='navbar-list-item'><Link to={'wanted'}>Procurados</Link></li>
        <li className='navbar-list-item'><Link to={'about'}>Sobre</Link></li>
      </ul>
    </div>
  )
}

export default Navbar;