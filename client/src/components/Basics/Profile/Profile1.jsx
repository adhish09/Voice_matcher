import React, { Component } from 'react'
import contact from '../images/contactlogo.png';
import mailme from '../images/mailmeimg.png';
import  '../Style.css'
import biologo from '../images/rajesh.jpeg'
import song from "../audio/rajesh.m4a";

class Profile1 extends Component {
  state = {
    audio: new Audio(song),
    isPlaying: false,
  };
  playPause = () => {
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      this.state.audio.pause();
    } else {
      this.state.audio.play();
    }
    this.setState({ isPlaying: !isPlaying });
  };

    render() {
        return <><div className="bgg">
            <div id="home">   
                <h1 className="header-h1">Profile Page</h1>
            </div>
            <section id="container-about" className="container-about">
            <h1>About Me</h1> 

            <img src={biologo} width="180" height="180" alt="abtimg"/>
            <p>
            Khattar worked in Hindi films like Don, Don 2, Khiladi 786, Race 2, the Satish Kaushik-directed Gang of Ghosts, Manjunath and Traffic. Khattar also appeared in English and other language TV series. Rajesh Khattar lent his voice to the iconic character of Iron Man (played by superstar Robert Downey Jr.)            </p>
        
            <div>
            {/* Show state of song on website */}
            <p className="bthoo">
              {this.state.isPlaying ? 
                "Audio is Playing" : 
                "Audio is Paused"}
            </p>
    
            {/* Button to call our main function */}
            <button onClick={this.playPause} className="btho">
              Play | Pause
            </button>
            <div className="bthogy">Matched 87% with Robert Downey Jr.</div>
          </div>

    </section>

    <section className="container-1">

    <img id="contactimg" src={contact} width="180" height="180" alt="contactlogo"/>
    <h3> <strong>Rajesh Khattar</strong></h3>
     <h4>Email Id: info0000@gmail.com</h4>
    <a id="mail"href="https://mail.google.com/mail/?view=cm&fs=1&to=info0000@gmail.com"><img id="mailmelogo" src={mailme} alt="mail me"/>Click Here To Send Mail</a>
    <h4>Contant Info: 19200999394/2999839902</h4> 
</section>
</div>
        </>
    }
}
export default Profile1;
