import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Container = styled.div`
background-color: rgb(247,250,253);
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
  padding: 40px 10px;
`;

  const Wrapper = styled.div`
display: flex;
width 40%;
border-radius: 50px;
flex-direction: column;
background-color: rgb(25,31,45);
border: 2px solid black;
gap: 8px;
`;
const Title1 = styled.h1`
align-item: center;
justify-content:center;
 display: flex;
 padding: 15px 20px;
`;

const Title2 = styled.h1`
 display:flex;
 padding 10px 15px;
 align-item: flex-end;
 justify-content: right;
`;

const Title = styled.h1`
  font-size: 14px;
  color: white;

`;

const Button1 = styled.button`
background-color: rgb(221,160,0);
width: 220px;
border-radius: 50px;
font-size: 20px;
border: 2px;
padding: 10px 20px;
font-weight: 500;
cursor: pointer;
color: rgb(25,31,45)
`;

const Button2 = styled.button`
background-color: rgb(221,160,0);
width: 220px;
border-radius: 50px;
font-size: 20px;
border: 2px;
padding: 10px 20px;
font-weight: 500;
cursor: pointer;
color: rgb(25,31,45)
`;
const GetStarted = () => {
  const navigate = useNavigate();
    return (
    <Container>
      <Wrapper>
      <Title1>
      <Link to="customer" style={{ textDecoration: "none" }}>
      <Button1>Customer</Button1>
     </Link>
      <Link to="signin" style={{ textDecoration: "none" }}>
      <Button2 >Voiceover Artist</Button2>  
      </Link>
      </Title1>
      <Title2>
      <Link to="customer" style={{ textDecoration: "none" }}>
      <Title> Skip</Title>
     </Link>
     </Title2>
      </Wrapper>
     
    </Container>
  );
};

export default GetStarted;