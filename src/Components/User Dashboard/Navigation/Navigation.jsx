import React, { useState } from "react";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
function Navigation() {
    const [nav, setNav] = useState(true);

    return (
        <>
            <button className="ham" onClick={() => setNav(!nav)}><MenuIcon sx={{ fontSize: 40 }}/></button>
            <div className={nav ? "Navigation text-center container col-md-2 " : "NavigationChange" }>
                <ul >
                    <Link to='/tracker'><li>Expense Tracker</li></Link>
                    <Link to='/finedu'> <li>Fin Edu</li></Link>
                    <li>Chat</li>
                    <Link to='/faq'><li>FAQ</li></Link>
                    <Link to='/'><li>Back</li></Link>
                </ul>
            </div>
        </>

    )
}
export default Navigation;