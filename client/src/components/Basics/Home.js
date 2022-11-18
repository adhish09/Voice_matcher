import React, { useState } from 'react';
import './Home.css';
import GetStarted from './GetStarted';
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
	const navigate = useNavigate();
	const [show, setShow] = useState(false);
	const toggle = () => {
		setShow(!show);
	};
	return (
		<div className="container">
			<div className="content">
				<div className="contentItems">
					<h1 className="navHead">Voice Matching</h1>
					<div className="whi">
                    Voice acting is real acting, and that requires you to cultivate your skills. While not all successful voiceover artists have gone through formal training, many work with an acting coach, a voice coach, or both. Listening to established VO professionals can also be a big help.
					</div>
					<Link to="getstarted" style={{ textDecoration: "none" }}>
					<button className="btn">Get Started</button>
                    </Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
