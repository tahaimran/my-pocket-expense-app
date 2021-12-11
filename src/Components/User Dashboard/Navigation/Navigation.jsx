import React from "react";
import {Link} from 'react-router-dom';
function Navigation() {
 
    return(
        <div className="Navigation text-center">
            <ul>

                <Link to='/tracker'><li>Expense Tracker</li></Link>
                <li>Fin Edu</li>
                <li>Chat</li>
                <li>FAQ</li>
                <Link to='/dashboard'><li>Back</li></Link>

            </ul>
        </div>
    )
}
export default Navigation;