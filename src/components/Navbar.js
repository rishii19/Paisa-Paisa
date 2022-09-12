import { Link } from 'react-router-dom'
import { useAuthContext } from "../hooks/useAuthContext"
import { useLogout } from '../hooks/useLogout'
import Cash from "../assets/cash-removebg.png"

import './Navbar.css'

export default function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    return (
        <nav className="navbar">
            <ul><img src={Cash} alt="img" />
                <li className="title">
                    Paisa-Paisa</li>
                {!user && (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </>
                )}
                {user && (
                    <>
                        <li className='user'>hello, {user.displayName}</li>
                        <li>
                            <button className="btn" onClick={logout}>Logout</button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}
