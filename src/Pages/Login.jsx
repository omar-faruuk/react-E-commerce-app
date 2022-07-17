import React from 'react';
import styled from 'styled-components';
import bg from '../image/v2osk-oWt--QQVNr4-unsplash.jpg'
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
width: 25%;
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
  flex-direction:column;
`
const Input = styled.input`
 flex: 1;
 min-width:40%;
 padding:8px;
 margin: 10px 5px;
 font-size: 16px;
 &[type=password]{
    font-size:20px;
 }
`

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Button = styled.button`
  border: none;
  background-color:teal;
  color: white;
  width:40%;
  text-transform:uppercase;
  padding:10px 20px;
  margin-bottom:10px;
  font-weight:bold;
  font-size:16px;
  cursor: pointer;
`
const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Sign in.</Title>
                <Form>
                    <Input placeholder='user name' />
                    <Input placeholder='password' type="password" />
                    <Button>Sign in</Button>
                    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;