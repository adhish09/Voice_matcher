import React, { Component } from 'react'
import contact from '../images/contactlogo.png';
import mailme from '../images/mailmeimg.png';
import  '../Style.css'
import biologo from '../images/Piyush1.jpeg'
import song from "../audio/Ranvir.mp3";

class Profile3 extends Component {
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
            Piyush Mishra is an Indian film actor, director, singer, scriptwriter, lyricist. He has worked in many of the popular Bollywood films. He has given his voice to one of the older and most popular brands in Indian Parle G. Where he says, “Roko Mat, Toko Mat”. The popular sentence which makes a place in our hearts “Bachpan se bada koi school nahi. Curiosity se bada koi teacher nahi, Aao banaye kal ke genius” also has the voice of Piyush Mishra.            </p>
        
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
            <div className="bthogy">Matched 91% with Ranveer Singh</div>
          </div>

    </section>

    <section className="container-1">

    <img id="contactimg" src={contact} width="180" height="180" alt="contactlogo"/>
    <h3> <strong>Piyush Mishra</strong></h3>
     <h4>Email Id: info0000@gmail.com</h4>
    <a id="mail"href="https://mail.google.com/mail/?view=cm&fs=1&to=info0000@gmail.com"><img id="mailmelogo" src={mailme} alt="mail me"/>Click Here To Send Mail</a>
    <h4>Contant Info: 19200999394/2999839902</h4> 
</section>
</div>
        </>
    }
}
export default Profile3;
