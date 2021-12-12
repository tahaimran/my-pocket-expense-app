import React from 'react'
import Navigation from '../Navigation/Navigation'
import VideoTemp from './VideoTemp'
import './FinEducation.css'
export default function FinEducation() {
    return (
        <>
            <Navigation />
            <div className='container'>

                <h4 className='heading text-center text-title '>Learn How To <span>Manage</span> Your Finances From <span>Teenage</span></h4>
                <div className='container '>
                    <div className='row'>
                        <VideoTemp src='https://www.youtube.com/embed/GSUYGHh-D5w' />
                        <VideoTemp src='https://www.youtube.com/embed/HQzoZfc3GwQ' />
                        <VideoTemp src='https://www.youtube.com/embed/nbrkmJTuGoY' />
                        <VideoTemp src='https://www.youtube.com/embed/Z1bU3dE7Rdc' />
                        <VideoTemp src='https://www.youtube.com/embed/wFwC7mwBJWo' />
                        <VideoTemp src='https://www.youtube.com/embed/DeYZTn3G0MA' />
                        <VideoTemp src='https://www.youtube.com/embed/Q2FrVAR4YKM' />
                        <VideoTemp src='https://www.youtube.com/embed/2Wt__4gD8tc' />
                        <VideoTemp src='https://www.youtube.com/embed/BTOHpoC-XsE' />
                    </div>
                </div>
            </div>
        </>
    )
}
