import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LandingPage from '../Components/Landing Page/LandingPage'
import UserDashboard from '../Components/User Dashboard/UserDashboard'
import ExpenseTracker from "../Components/User Dashboard/Expense Tracker/ExpenseTracker";
import FinEducation from '../Components/User Dashboard/Fin Education/FinEducation'
import FAQ from "../Components/User Dashboard/FAQs/FAQ";
function AppRouter() {
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<LandingPage/>} />
                <Route path='/dashboard' element={<UserDashboard />} />
                <Route path='/tracker' element={<ExpenseTracker />} />
                <Route path='/finedu' element={<FinEducation />} />
                <Route path='/faq' element={<FAQ />} />

            </Routes>
        </Router>
    )
}
export default AppRouter;