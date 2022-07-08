import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

import './Navbar.css'
import Temple from '../assets/temple.svg'

export default function Navbar() {
  const { isPending, logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <nav className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Temple} alt='logo' />
          <span>PM Tool</span>
        </li>
        {!user && (
          <>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
          </>
        )}
        {user && (
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
        )}
      </ul>
    </nav>
  )
}
