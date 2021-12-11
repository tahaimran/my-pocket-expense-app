import React from 'react';
import whatsapp from '../Images/whatsapp.png'

function Whatsapp() {
    return(
           <a href='https://api.whatsapp.com/send?phone=14155238886'><img className='imageChat' src={whatsapp} alt="" /></a> 
    )
}
export default Whatsapp;