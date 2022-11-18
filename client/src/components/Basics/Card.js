import React from "react";
import yashh from "./audio/yashh.mp3";
import { useEffect, useState} from "react";

const Card = ({ menuData }) => {
    console.log(menuData);

const [value, setValue] = useState(0);
useEffect(()=>{play()},[value]);
function play() {
new Audio(yashh).play()
}



  return (
    <>
    
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const {name, category, image, description, audio } = curElem;

          return (
            <>
              <div className="card-container" >
                <div className="card ">
                  <div className="card-body">
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />
               
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Card;