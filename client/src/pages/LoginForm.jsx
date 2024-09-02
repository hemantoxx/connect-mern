import React, { useState } from "react";
import { Link } from 'react-router-dom'; 
import './LoginForm.css';
import { FaUserAlt, FaLock } from "react-icons/fa";

const LoginForm = () => {
    const [changeApp, setChangeApp] = useState('Alumni'); // Renamed function to be more descriptive

    const renderForm = (placeholderUsername, placeholderPassword) => (
        <form>
            <div className="input-box">
                <input type='text' placeholder={placeholderUsername} required />
                <FaUserAlt className="icon" />
            </div>
            <div className="input-box">
                <input type='password' placeholder={placeholderPassword} required />
                <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
                <label><input type='checkbox' /> Remember me</label>
                <a href='#'>Forgot password?</a>
            </div>
            <button type='submit' className="But">Login</button>
            
            <div className="register-link">
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </form>
    );

    return (
        <div className='wrapper'>
            <h1>Login</h1>
            <div className="additional-logins">
                <button onClick={() => setChangeApp('Student')} aria-label="Login as Student">Student</button>
                <button onClick={() => setChangeApp('Alumni')} aria-label="Login as Alumni">Alumni</button>
                <button onClick={() => setChangeApp('Institution')} aria-label="Login as Institution">Institution</button>
            </div>
            {changeApp === 'Student' && renderForm('Username', 'Password')}
            {changeApp === 'Alumni' && renderForm('Alumni ID', 'Password')}
            {changeApp === 'Institution' && renderForm('Institution Username', 'Password')}
            <div className="feedback-link">
                <p>Have feedback? <Link to="/feedback">Let us know</Link></p>
            </div>
        </div>
    );
};

export default LoginForm;
