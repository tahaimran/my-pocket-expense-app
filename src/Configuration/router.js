import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LandingPage from '../Components/Landing Page/LandingPage'
import UserDashboard from '../Components/User Dashboard/UserDashboard'
import ExpenseTracker from "../Components/User Dashboard/Expense Tracker/ExpenseTracker";
function AppRouter() {
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<LandingPage/>} />
                <Route path='/dashboard' element={<UserDashboard />} />
                <Route path='/tracker' element={<ExpenseTracker />} />

            </Routes>
        </Router>
    )
}
export default AppRouter;