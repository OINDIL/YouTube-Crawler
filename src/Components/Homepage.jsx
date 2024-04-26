import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import screenshot_1 from './Images/sc_2.png'
import { useAuth } from './Context/AuthContext'

function Homepage() {
    const { currentUser } = useAuth()
    return (
        <>
            <div className="container-fluid">
                <div className="d-flex justify-content-around align-items-center flex-wrap" style={{ minHeight: '100svh' }}>
                    <div className="d-flex flex-column gap-3" style={{ maxWidth: '500px' }}>
                        {!currentUser ? <h2 className="card-title fw-bold">YtCrawler ইউটিউব সার্চ প্লাটফর্ম </h2> : <h2 className="card-title fw-bold">Hi, {currentUser.displayName} start searching</h2>}

                        <h6 className="card-subtitle text-body-secondary fw-medium">YTCrawler is a cutting-edge platform for discovering YouTube channels. Unlike traditional tools, our innovative approach combines advanced algorithms with user preferences to deliver personalized channel recommendations. With powerful analytics for creators and tailored suggestions for viewers, YTCrawler offers an immersive and rewarding experience for all.</h6>
                        <Link className="btn btn-danger fw-bold" to="/channels" role="button">Start Searching</Link>
                    </div>
                    <div className="shadow-lg border">
                        <img src={screenshot_1} className='img-fluid' alt="alt1" style={{ maxHeight: '300px' }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage