import React from 'react';
import mobile from '../Images/mobile.png'
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom'
function TopBanner() {
    return (
        <div className='container TopBanner'>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                    <div className='AppData  p-5'>
                        <h3>Learn. Understand.
                            Build. Wealth.</h3>
                        <p>With My Pocket, you'll learn finance, simple and trending learning material.</p>
                        <Link to='/tracker'> 
                        <span><LaptopWindowsIcon sx={{ fontSize: 40 }} color="action" /> Access Dashboard
                            <ArrowForwardIosIcon /> </span>
                        </Link>
                    </div>
                </div>
                <div className="col-md-6  text-center">
                    <img src={mobile} alt="" className='img-fluid' height='500px' />
                </div>
            </div>

        </div>
    )
}
export default TopBanner;