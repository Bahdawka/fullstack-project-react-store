import { NavLink } from 'react-router'
import { navigationRoutes } from '../../router'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../redux/store'
import { login, logout } from '../../redux/slices/authSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)

  const handleLogin = () => {
    dispatch(login())
  }

  const handleLogout = () => {
    dispatch(logout())
  }

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
        {isLoggedIn ? (
          <li>
            <button className="navbar__link" onClick={handleLogout}>LogOut</button>
          </li>
        ) : (
          <li>
            <button className="navbar__link" onClick={handleLogin}>LogIn</button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar