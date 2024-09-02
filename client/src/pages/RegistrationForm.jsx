import React from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './RegistrationForm.css';


const RegistrationForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Register</h1>
                <div className="input-box">
                    <input type='text' placeholder='UserID' required />
                   
                </div>
                <div className="input-box">
                    <input type='text' placeholder='Name' required />
                   
                </div>
                <div className="input-box">
                    <input type='email' placeholder='Email' required />
                   
                </div>
                <div className="input-box">
                    <input type='password' placeholder='Password' required />
                    
                </div>
                <div className="input-box">
                    <input type='password' placeholder='Confirm Password' required />
                   
                </div>
                <div className="input-box">
                    <input type='tel' placeholder='Contact Number' required />
                    
                </div>
                <button type='submit'>Register</button>
                <div className="login-link">
                    <p>Already have an account? <Link to="/">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
