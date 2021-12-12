import React from 'react'
import ceo from '../Images/ceo.jpg'

export default function CeoMsg() {
    return (
        <div className='row ceo d-flex justify-content-center'>
            <div className="col-md-8 border border-1 rounded testimonial   shadow mt-5 p-3 pt-5">
                <p>My Pocket has improved our team productivity by an order of magnitude. Since
                    making the switch our team has become a well-oiled collaboration machine.</p>
                <div className="d-flex testimonial  flex-wrap  p-2">

                    <img src={ceo} className=" kyle p-2 " alt="" />
                    <h5 className='title-text mt-5'>M Taha Imran</h5>
                    <p className="">Founder & CEO, My Pocket</p>
                </div>
            </div>
        </div>
    )
}