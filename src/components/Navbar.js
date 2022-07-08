import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

import './Navbar.css'
import Temple from '../assets/temple.svg'

export default function Navbar() {
  const { isPending, logout } = useLogout()
  return (
    <nav className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Temple} alt='logo' />
          <span>PM Tool</span>
        </li>

        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
        <li>
          {isPending ? (
            <button className='btn' disabled>
              Logging Out...
            </button>
          ) : (
            <button className='btn' onClick={logout}>
              Logout
            </button>
          )}
        </li>
      </ul>
    </nav>
  )
}
