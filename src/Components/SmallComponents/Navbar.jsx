import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAllContext } from '../Context/AllContextAPI'
import { useAuth } from '../Context/AuthContext'

const Navbar = () => {
    const { currentUser, isAdmin } = useAuth()
    const { active, handleActive } = useAllContext()

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className='navbar-brand' to="/" onClick={() => handleActive('channles')}>YT CRAWLER</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={`nav-link ${active === 'channels' ? `active` : null}`} aria-current="page" onClick={() => handleActive('channels')} to="/channels">Channels</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${active === 'videos' ? `active` : null}`} onClick={() => handleActive('videos')} to="/videos">Videos</Link>
                            </li>
                            <li>
                                <Link className={`nav-link`} to='/pricing'>Pricing</Link>
                            </li>
                            <li>
                                {currentUser ? <Link className={`nav-link  ${active === currentUser.displayName ? `active` : null}`} to="/dashboard"
                                    onClick={() => handleActive(currentUser.displayName)}
                                >{currentUser.displayName}</Link>
                                    :
                                    <Link className={`nav-link ${active === 'signin' ? `active` : null}`} to="/signin"
                                        onClick={() => handleActive('signin')}>Login</Link>
                                }
                            </li>
                            <li>
                                {isAdmin ? <Link className={`nav-link ${active === 'admin' ? `active` : null}`} to='/admin'
                                    onClick={() => handleActive('signin')}>Admin</Link> : null}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar