import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "./redux/userSlice";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Home1 from './Home1';
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
border-radius: 50px;
align-items: center;
flex-direction: column;
background-color: rgb(25,31,45);
border: 2px solid black;
padding: 30px 60px;
gap: 10px;
`;

const Title = styled.h1`
  font-size: 34px;
  color: white;
`;

const SubTitle = styled.h2`
color: white;
font-size: 28px;
font-weight: 300;
`;

const Input = styled.input`
font-size: 15px;
border: 2px solid white;
border-radius: 50px;
padding: 10px;
background-color: white;
width: 100%;
color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
background-color: rgb(221,160,0);
width: 105%;
border-radius: 50px;
font-size: 20px;
border: 2px;
padding: 10px 20px;
font-weight: 500;
cursor: pointer;
color: rgb(25,31,45)
`;

const More = styled.div`
display: flex;
margin-top: 10px;
font-size: 15px;
color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 80px;
`;

const Link = styled.span`
  margin-left: 35px;
`;

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
   
    try {
      const res = await axios.post("/auth/signin", { name, password });
      dispatch(loginSuccess(res.data));
      console.log("login", res.data);
      navigate("/Home1")
    } catch (err) {
      dispatch(loginFailure());
    }
  };



  
  const handleSignup = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
   
    const img = "https://uploads.commoninja.com/searchengine/wordpress/adorable-avatars.png"
    try {
      const res = await axios.post("/auth/signup", { name,email,img, password });
      dispatch(loginSuccess(res.data));
      console.log("signup", res.data);
      navigate("/")
    } catch (err) {
      dispatch(loginFailure());
    }
  };




    return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Input
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Sign in</Button>
       
        <Title>or</Title>
        <Button >Signin with Google</Button>
        <Title>or</Title>
        <Input
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSignup}>Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;