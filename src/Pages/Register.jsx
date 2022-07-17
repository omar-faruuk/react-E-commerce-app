import React from 'react';
import styled from 'styled-components';
import bg from '../image/mahdi-bafande-MuQg0RipDks-unsplash.jpg'
import { mobile } from './../Responsive';

const Container = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(255, 255, 255, 0.5),
rgba(255, 255, 255, 0.5)),
url(${bg}) left no-repeat;
background-size:cover;
display: flex;
align-items:center;
justify-content:center;

`
const Wrapper = styled.div`
width: 40%;
background-color:white;
padding:20px;
${mobile({width:'70%'})}
  
`
const Title = styled.h1`
  margin-bottom: 10px;
  font-weight:300;
`
const Form = styled.form`
  display: flex;
  flex-wrap:wrap;
`
const Input = styled.input`
 flex: 1;
 min-width:40%;
 padding:8px;
 margin: 10px 5px;
 font-size: 16px;
`
const Agrement = styled.span`
  margin:10px 0;
  font-weight:500 ;
`
const Button = styled.button`
  border: none;
  background-color:teal;
  color: white;
  width:40%;
  text-transform:uppercase;
  padding:10px 20px;
  font-weight:bold;
  font-size:16px;
  cursor: pointer;
`
const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create an account.</Title>
                <Form>
                    <Input placeholder='first name' />
                    <Input placeholder='last name'/>
                    <Input placeholder='user name' />
                    <Input placeholder='email' type="email" />
                    <Input placeholder='password' type="password"/>
                    <Input placeholder='confirm password' type="password"/>
                    <Agrement> By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b></Agrement>
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;