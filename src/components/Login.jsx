import React, { useEffect, useRef } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import Main from './Main';

function Login() {
    const navigate = useNavigate();
    const bgRef = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        const n = 400;
        const bg = bgRef.current;
        for (let i = 0; i < n; i++) {
            const box = document.createElement('div');
            box.classList.add('box');
            bg.append(box);
        }
    }, []);

    const onHeadingMouseOver = (event) => {
        let i = 0;
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
                .map((letter, index) => {
                    if (index < i) {
                        return event.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (i >= 9) clearInterval(interval);
            i += 1 / 5;
        }, 50);
    };

    const handleLogin = () => {
        navigate('/main');
        // const loginEmail = document.getElementById("lemail").value;
        // const loginPassword = document.getElementById("lpassword").value;
        // console.log("Login Email:", loginEmail);
        // console.log("Login Password:", loginPassword);
    };

    const handleRegister = () => {
        navigate('/main');
        // const registerName = document.getElementById("name").value;
        // const registerEmail = document.getElementById("email").value;
        // const registerPassword = document.getElementById("password").value;
        // console.log("Register Name:", registerName);
        // console.log("Register Email:", registerEmail);
        // console.log("Register Password:", registerPassword);
    };

    return (
        <div className='body'>

            <h1 ref={headingRef} className="heading" data-value="FORESTY" onMouseOver={onHeadingMouseOver}>FORESTY</h1>

            <div className="bg" id="bg" ref={bgRef}>
                <div className="bgani"></div>
                <div className="bgani2"></div>
            </div>

            <div className="wrapper">
                <div className="card-switch">
                    <label className="switch">
                        <input className="toggle" type="checkbox" />
                        <span className="slider"></span>
                        <span className="card-side"></span>
                        <div className="flip-card__inner">
                            <div className="flip-card__front">
                                <div className="title">Log in</div>
                                <form action="" className="flip-card__form">
                                    <input type="email" placeholder="Email" id="lemail" className="flip-card__input" />
                                    <input type="password" placeholder="Password" id="lpassword" className="flip-card__input" />
                                    <button className="flip-card__btn" id="login" onClick={handleLogin}>Let`s go!</button>
                                </form>
                            </div>
                            <div className="flip-card__back">
                                <div className="title">Sign up</div>
                                <form action="" className="flip-card__form">
                                    <input type="name" placeholder="Name" id="name" className="flip-card__input" />
                                    <input type="email" placeholder="Email" id="email" className="flip-card__input" />
                                    <input type="password" placeholder="Password" id="password" className="flip-card__input" />
                                    <button className="flip-card__btn" id="register" onClick={handleRegister}>Confirm!</button>
                                </form>
                            </div>
                        </div>
                    </label>
                </div>
            </div>

        </div>
    )
}

export default Login;
