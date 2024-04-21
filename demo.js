import React, { useEffect } from 'react';
import './styles.css'; // Assuming you have a separate CSS file for styling

function CourseProgress() {
    useEffect(() => {
        const toggleCircle = (circleId) => {
            const circle = document.getElementById(circleId);
            if (circle.classList.contains('green')) {
                circle.classList.remove('green');
                sessionStorage.removeItem(circleId);
            } else {
                circle.classList.add('green');
                sessionStorage.setItem(circleId, 'green');
            }
            updateProgressBar();
        };

        const setCircleColors = () => {
            const circles = document.querySelectorAll('.circle');
            circles.forEach(circle => {
                const circleId = circle.id;
                const circleState = sessionStorage.getItem(circleId);
                if (circleState === 'green') {
                    circle.classList.add('green');
                }
            });
            updateProgressBar();
        };

        const updateProgressBar = () => {
            const circles = document.querySelectorAll('.circle.green');
            const progress = (circles.length / document.querySelectorAll('.circle').length) * 100;
            document.getElementById('progress').style.width = progress + '%';
        };

        setCircleColors();
    }, []);

    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <img src="logo.png" alt="Logo" />
                </div>
                <ul className="nav-options">
                    <li><a href="#">Leaderboard</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#" className="login-btn">Login</a></li>
                    <li><img src="Logo.png" alt="Profile" className="profile-img" /></li>
                </ul>
            </nav>

            <div className="container">
                <h1>Course Name</h1><br />
                <div className="weeks">
                    <div className="week">
                        <h2>Week 1</h2>
                        <ul className="modules">
                            <li className="module">
                                <a href="https://github.com/R0hit-Yadav" onClick={() => toggleCircle('circle1')}>Module 1.1 - Introduction</a>
                                <span className="circle" id="circle1"></span>
                            </li>
                            <li className="module">
                                <a href="https://github.com/R0hit-Yadav" onClick={() => toggleCircle('circle2')}>Module 1.2 - Getting Started</a>
                                <span className="circle" id="circle2"></span>
                            </li>
                        </ul>
                    </div>
                    <div className="week">
                        <h2>Week 2</h2>
                        <ul className="modules">
                            <li className="module">
                                <a href="https://github.com/R0hit-Yadav" onClick={() => toggleCircle('circle3')}>Module 2.1 - Intermediate Concepts</a>
                                <span className="circle" id="circle3"></span>
                            </li>
                        </ul>
                    </div>
                    <div className="week">
                        <h2>Week 3</h2>
                        <ul className="modules">
                            <li className="module">
                                <a href="https://github.com/R0hit-Yadav" onClick={() => toggleCircle('circle4')}>Module 3.1 - Advanced Concepts</a>
                                <span className="circle" id="circle4"></span>
                            </li>
                            <li className="module">
                                <a href="https://github.com/R0hit-Yadav" onClick={() => toggleCircle('circle5')}>Module 3.2 - Project Work</a>
                                <span className="circle" id="circle5"></span>
                            </li>
                        </ul>
                    </div>
                    <div className="week">
                        <h2>Week 4</h2>
                        <ul className="modules">
                            <li className="module">
                                <a href="https://github.com/R0hit-Yadav" onClick={() => toggleCircle('circle6')}>Module 4.1 - Final Exam Preparation</a>
                                <span className="circle" id="circle6"></span>
                            </li>
                        </ul>
                    </div>
                    <div className="week">
                        <h2>Week 5</h2>
                        <ul className="modules">
                            <li className="module">
                                <a href="https://github.com/R0hit-Yadav" onClick={() => toggleCircle('circle7')}>Module 5.1 - Conclusion</a>
                                <span className="circle" id="circle7"></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="progress-bar">
                <div className="progress" id="progress"></div>
            </div>
        </div>
    );
}

export default CourseProgress;
