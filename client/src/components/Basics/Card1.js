import React from "react";
import { useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
const Card1 = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="main-card--cointainer">
              <div className="card-container" >
                <div className="card ">
                  <div className="card-body">
                    <h2 className="card-title"> Rajesh Khattar </h2>
                    <span className="card-description subtle">
                    Rajesh Khattar is an Indian actor, voice artist and screenwriter who works mainly in Bollywood.                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <Link to="profile1" style={{ textDecoration: "none" }}>
                  <img src="../images/Rajesh.jpeg" alt="images" className="card-media" />
                  </Link>
                <div className="voice">
                 </div>
                </div>
              </div>
      
              <div className="card-container" >
                <div className="card ">
                  <div className="card-body">
                    <h2 className="card-title"> Richa Nigam </h2>
                    <span className="card-description subtle">
                    Richa has a husky and a dark voice. She is also known as a popular voice over artist in India.
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <Link to="profile2" style={{ textDecoration: "none" }}>
                  <img src="../images/Richa.jpeg" alt="images" className="card-media" />
                  </Link>
                <div className="voice">
                 </div>
                </div>
              </div>

              <div className="card-container" >
              <div className="card ">
                <div className="card-body">
                  <h2 className="card-title"> Piyush Mishra </h2>
                  <span className="card-description subtle">
                  Piyush Mishra is an Indian film actor, director, singer, scriptwriter, lyricist.
                  </span>
                  <div className="card-read">Read</div>
                </div>
                <Link to="profile3" style={{ textDecoration: "none" }}>
                <img src="../images/Piyush1.jpeg" alt="images" className="card-media" />
                </Link>
              <div className="voice">
               </div>
              </div>
            </div>

              <div className="card-container" >
                <div className="card ">
                  <div className="card-body">
                    <h2 className="card-title"> Raghubir Yadav </h2>
                    <span className="card-description subtle">
                    Raghubir Yadav is an Indian actor, singer, music composer. He has worked in the popular films.                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <Link to="profile4" style={{ textDecoration: "none" }}>
                  <img src="../images/Raghubir.jpeg" alt="images" className="card-media" />
                  </Link>
                <div className="voice">
                 </div>
                </div>
              </div>

             
      
              <div className="card-container" >
                <div className="card ">
                  <div className="card-body">
                    <h2 className="card-title"> Sonia Nair </h2>
                    <span className="card-description subtle">
                    Sonia has given her voice to the popular ads which have female voice. 
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <Link to="profile5" style={{ textDecoration: "none" }}>
                  <img src="../images/Sonia.jpeg" alt="images" className="card-media" />
                  </Link>
                <div className="voice">
                 </div>
                </div>
              </div>

              <div className="card-container" >
                <div className="card ">
                  <div className="card-body">
                    <h2 className="card-title"> Atul Kapoor </h2>
                    <span className="card-description subtle">
                    Atul Kapoor is an Indian voice-over artist popular for his work in dubbing foreign content in Hindi.                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <Link to="profile6" style={{ textDecoration: "none" }}>
                  <img src="../images/Atul.jpeg" alt="images" className="card-media" />
                  </Link>
                <div className="voice">
                 </div>
                </div>
              </div>

              
      </section>
    </>
  );
};

export default Card1;