import React from 'react'
import './main.css'

function Main() {
    return (
        <>
            <div class="wrapper">
                <header>
                    <nav>
                        <div class="logo">Foresty</div>
                        <div class="menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="about.html">About us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Profile</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>

            <canvas id="canvas1"></canvas>

            <div class="container">
                <h1 class="slogan">We care for your website, so you don't have to !!</h1>
                <form class="linkform">
                    <label for="linkbox" class="enterlink">Enter URL to scan:</label>
                    <input type="text" id="linkbox" name="linkbox" class="linkbox" />
                    <input type="submit" value="Scan" class="scanbtn" />
                </form>
            </div>
        </>
    )
}

export default Main