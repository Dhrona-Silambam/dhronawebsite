import React from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import OTP from "../auth/login/otp"
const Pages1 = () => {
    return (
        
        <Router>
            <Routes>
                <Route path="/" element={<OTP/>}/>
            </Routes>
        </Router>
    );
};
export default Pages1
       