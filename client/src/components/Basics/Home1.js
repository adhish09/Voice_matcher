import React, { useState, useRef } from "react";
import "./Style.css";
import Details from "./Details";
import Card from "./Card";
import Card1 from "./Card1";
import styled  from "styled-components";
import VideoCallOutlined from "@mui/icons-material/VideoCallOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SignIn from "./SignIn";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";



const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;


const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;

const uniqueList = [...new Set(Details.map((curElem) => {
    return curElem.category;
})
),
];
console.log(uniqueList);


const Home1 = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
    console.log('value is:', event.target.value);
  };

  const handleClick = event => {
    event.preventDefault();
    // 👇️ value of input field
    console.log('handleClick 👉️', message);
  };
    const filterNames = (name) => {
      const updatedList = Details.filter((curElem) => {
          return curElem.name === name;
      });
      SetMenuData(updatedList);
    };


    const {currentUser} = useSelector(state=>state.user);
 
  const [menuData, SetMenuData] = useState(Details);
    
  const filterItem = (category) => {
    const updatedList = Details.filter((curElem) => {
        return curElem.category === category;
    });
    SetMenuData(updatedList);
  };

  const filterName = (name) => {
    const updatedList = Details.filter((curElem) => {
        return curElem.name === name;
    });
    SetMenuData(updatedList);
  };
  return (
    <>
    <div className="search">
    <input placeholder="Search" className="searchbar" onChange={handleChange} value={message} autoComplete="off" type="text" id="message" name="message"/>
    <button className="button" onClick={handleClick}>Search</button>
    <User>
      <VideoCallOutlinedIcon />
      <Avatar src={currentUser.img}/>
      {currentUser.name}


    </User>
 
    </div>
  <div className="fam">
  <button className="fam-item" onClick={() => filterName("Akshay Kumar")}>Akshay Kumar</button>
  <button className="fam-item" onClick={() => filterName("Kiara Advani")}>Kiara Advani</button>
  <button className="fam-item" onClick={() => filterName("Shahid Kapoor")}>Shahid Kapoor</button>
  <button className="fam-item" onClick={() => filterName("Disha Patani")}>Disha Patani</button></div>


   <Card1/>
    </>
  )
}

export default Home1;