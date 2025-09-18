import { NavLink } from 'react-router'
import { navigationRoutes } from '../../router'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {navigationRoutes.map((route) => (
          <li key={route.id} className="navbar__item">
            <NavLink to={route.path} className="navbar__link">
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar