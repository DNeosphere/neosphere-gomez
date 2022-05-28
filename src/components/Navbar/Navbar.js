import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className='navbar__container'>
      <div className='navbar__header'>
        <div className='navbar-header__brand'>Neosphere</div>
        <CartWidget />
      </div>

      <ul className='navbar__list'>
        <li className='navbar__list-item'>Miniaturas</li>
        <li className='navbar__list-item'>Cartas</li>
        <li className='navbar__list-item'>Pinturas</li>
        <li className='navbar__list-item'>Sobres</li>
        <li className='navbar__list-item'>Dados</li>
        <li className='navbar__list-item'>Libros</li>
      </ul>
    </nav>
  )
}

export default Navbar