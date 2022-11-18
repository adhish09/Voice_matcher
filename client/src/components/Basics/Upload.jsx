import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UploadAudio from "./record.js";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  background-color: rgb(67,65,70);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
display: flex;  
width: 600px;
  height: 600px;
  border-radius: 20px;
  background-color: rgb(174,176,176);
  color: ${({ theme }) => theme.text};
  gap: 20px;
 
  flex-direction: column;
  position: relative;
  border: 2px solid black;
`;

const Title = styled.h1`
display:flex;
background-color:red;
border-top-left-radius:20px;
border-top-right-radius:20px;
padding:16px 16px;
border-: 20px;
color:white;
  text-align: center;
  justify-content:center;
`;

const Close = styled.div`
  position: absolute;
  top: 6px;
  color: white;
  right: 5px;
  cursor: pointer;
  font-size: 15px;
  border:2px solid white;
  border-radius: 100px;
  padding:2px 6px;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  padding: 10px;
  margin-left:20px;
  height:50px;
  margin-right: 20px;
  background-color: transparent;
  z-index: 999;
  font-size:17px;
`;
const Desc = styled.textarea`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;
const Title1 = styled.h1`
color:black;
text-align: center;
justify-content:center;
font-weight: 300;

`;

const Button = styled.button`
border: 3px solid black;
border-radius: 10px;
 margin-left:235px;
 margin-right:235px;
  padding: 10px 20px;
  font-size:19px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  
`;
const Label = styled.label`
  font-size: 14px;
`;

const Upload = ({ setOpen }) => {
  const navigate = useNavigate()
  return (
    <Container>
      <Wrapper>
        
        <Title>Upload a New Audio
        <Link to="/" style={{ textDecoration: "none" }}>
        <Close>X</Close>
        </Link></Title>
        
        <Input
        type="text"
        placeholder="Title"
        name="title"
      />
          <Input
            type="file"
            accept="audio/*"
          />
  
        <Button >Upload</Button>
        <hr/>
        <Title1>Record audio</Title1>
     <UploadAudio />
   
        </Wrapper>
    </Container>

    
  );
};

export default Upload;