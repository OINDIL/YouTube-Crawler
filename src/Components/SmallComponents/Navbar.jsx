import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAllContext } from '../Context/AllContextAPI'
import { useAuth } from '../Context/AuthContext'

const Navbar = () => {
    const { currentUser } = useAuth()
    const { active, handleActive } = useAllContext()

    // STATES
    const [userName, setUserName] = useState()

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className='navbar-brand' to="/" onClick={() => handleActive('channles')}>Biswas Crawler</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={`nav-link ${active === 'channels' ? `fw-bold` : null}`} aria-current="page" onClick={() => handleActive('channels')} to="/">Channels</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${active === 'videos' ? `fw-bold` : null}`} onClick={() => handleActive('videos')} to="/videos">Videos</Link>
                            </li>
                            <li>
                                {currentUser ? <Link className={`nav-link  ${active === currentUser.displayName ? `fw-bold` : null}`} to="/dashboard"
                                    onClick={() => handleActive(currentUser.displayName)}
                                >{currentUser.displayName}</Link>
                                    :
                                    <Link className={`nav-link ${active === 'signin' ? `fw-bold` : null}`} to="/signin"
                                        onClick={() => handleActive('signin')}>Login</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar