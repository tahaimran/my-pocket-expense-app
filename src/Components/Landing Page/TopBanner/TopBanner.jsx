import React from 'react';
import mobile from '../Images/mobile.png'

function TopBanner() {
    return (
        <div className='container '>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                    <div className='AppData  p-5'>
                        <h3>Simple. Secure.
                            Reliable messaging.</h3>
                        <p>With WhatsApp, you'll get fast, simple, secure messaging and calling for free*,
                            available on phones all over the world.</p>
                        <span>Mac or Windows PC</span>
                    </div>
                </div>
                <div className="col-md-6  text-center">
                    <img src={mobile} alt="" height='500px' />
                </div>
            </div>

        </div>
    )
}
export default TopBanner;