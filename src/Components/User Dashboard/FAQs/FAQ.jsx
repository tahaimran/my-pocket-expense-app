import React from 'react'
import Navigation from '../Navigation/Navigation'
import FaqImg from '../Images/faq.png'
import './FAQ.css'
export default function FAQ() {
    return (
        <>
            <Navigation />
            <div className='container-fluid faq text-center'>
                    <h2 className='text-title'>Are You Facing Any Issue</h2>
                    <img src={FaqImg} className='' width={'800px'} alt="" />
                    <h4>We Are Available 24/7</h4>
                    <a href='https://api.whatsapp.com/send?phone=14155238886'>
                        <button className='btn btn-lg '>Contact Us Directly</button>
                    </a>
            </div>
        </>
    )
}
