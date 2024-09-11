import React, { ReactNode } from "react";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import ForgotPasswordPage from "./ForgotPasswordPage";

export default class AccessManagementRoot extends React.Component {
    render(): ReactNode {
        return <Router>
            <Routes data-testid="app-routes">
                <Route path="/" element={<LoginPage  prefilledEmail={""} loginButtonTitle={"Login"}/>} />
                <Route path="/signUpPage" element={<SignUpPage />} />
                <Route path="/forgotPasswordPage" element={<ForgotPasswordPage />} />
            </Routes>
        </Router>   
    }
}
