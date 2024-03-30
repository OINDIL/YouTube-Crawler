import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [active, setActive] = useState('channels')

    const handleActive = (link) =>{
        setActive(link)
    }
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className='navbar-brand' to="/" onClick={()=>handleActive('channles')}>Biswas Crawler</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={`nav-link ${active === 'channels' ? `active` : null}`} aria-current="page" onClick={()=>handleActive('channels')} to="/">Channels</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${active === 'videos' ? `active` : null}`} onClick={()=>handleActive('videos')} to="/videos">Videos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar