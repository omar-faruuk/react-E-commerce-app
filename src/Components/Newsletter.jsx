import { Send } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from './../Responsive';

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction:column;
  ${mobile({height:'45vh'})}
`
const Title = styled.h1`
 font-size: 70px;
 margin-bottom:20px;
 ${mobile({fontSize:'50px',marginBottom:"10px"})}
`
const Desc = styled.div`
 font-size:24px;
 font-weight:300;
 margin-bottom: 10px;
 ${mobile({textAlign:'center'})}
`
const InputContainer = styled.div`
  background-color: white;
  width: 50%;
  border: 1px solid lightgray;
  display: flex;
  justify-content:space-between;
  ${mobile({width:'80%'})}
  
`
const Input = styled.input`
border: none;
outline:none;
flex: 8;
margin-left:12px;
padding: 8px;
font-size:15px;
`
const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
cursor: pointer;
padding: 8px;
`

const Newsletter = () => {
    return (
        <Container>
          <Title>Newsletter</Title>
          <Desc>Get timely updates from your favorite products.</Desc>
          <InputContainer>
            <Input placeholder='your email'/>
            <Button>
                <Send/>
            </Button>
          </InputContainer>  
        </Container>
    );
};

export default Newsletter;