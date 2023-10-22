import React from 'react';
import "../styles/homepage.css";
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import twitterHome from "../assets/images/twitter_home.png";
import logo from "../assets/images/logo.png";

const Homepage = () => {
    const footerItems = [
        { id: 1, text: 'About' },
        { id: 2, text: 'Help Center' },
        { id: 3, text: 'Terms of Service' },
        { id: 4, text: 'Privacy Policy' },
        { id: 5, text: 'Cookie Policy' },
        { id: 6, text: 'Accessibility' },
        { id: 7, text: 'Ads Info' },
        { id: 8, text: 'Terms of Service' },
        { id: 9, text: 'Terms of Service' },
        { id: 10, text: 'Blog' },
        { id: 11, text: 'Status' },
        { id: 12, text: 'Careers' },
        { id: 13, text: 'Brand Resources' },
        { id: 14, text: 'Advertising' },
        { id: 15, text: 'Marketing' },
        { id: 16, text: 'Twitter for Business' },
        { id: 17, text: 'Developers' },
        { id: 18, text: 'Directory' }
    ];

    const { user, logOut } = UserAuth();
    const navigate = useNavigate();

    

    return (
        <div className='homepage'>
            {user ? (
                // If user is logged in, redirect to the /account route
                navigate('/account')
            ) : (
                <div className="homepage__top">
                    <div className="homepage_topLeft">
                        <img src={twitterHome} alt="twitter_home" />
                    </div>
                    <div className="homepage_topRight">
                        <img src={logo} alt="twitter_logo" />
                        <h1 className='homepage_top_right_Title'>Happening now</h1>
                        <h2 className='homepage_top_right_Subtitle'>Join Twitter today</h2>
                        <div className="homepage_topRight_Buttons">
                            {/* Use Link to navigate to the /signup route */}
                            <Link to="/signup" className='secondary__button signup-button'>Sign up with email</Link>
                            <p className="homepage__topright_policies">
                                By signing up you agree to the <a href="/">Terms of Service</a> and{" "} <a href='/'>Privacy Policy</a>,
                                including {" "} <a href='/'>Cookie Use</a>.
                            </p>
                        </div>
                        <div className="homepage_topRight_Buttons">
                            <h2>Already have an account</h2>
                            <Link to="/login" className='primary__button signin-button'>Sign in</Link>
                        </div>
                    </div>
                </div>
            )}
            <footer className="footer">
                <ul className="footer__list">
                    {footerItems.map((item) => (
                        <li className="footer__listItem" key={item.id}>
                            <a href="/">{item.text}</a>
                        </li>
                    ))}
                </ul>
                <p className='footer__copyright'>
                    <a href="/">Settings</a>
                    <span>&copy; Twitter clone Project</span>
                </p>
            </footer>
        </div>
    );
}

export default Homepage;
