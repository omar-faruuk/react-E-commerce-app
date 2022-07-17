import React from 'react';
import  styled  from 'styled-components';
import { mobile } from './../Responsive';
const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 3px;
  position: relative;
`
const Image = styled.img`
 width: 100%;
 height:100%;
 object-fit:cover;
 ${mobile({height:'35vh'})}
 
`
const Info = styled.div`
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height:100%;
 justify-content:center;
 display: flex;
 flex-direction:column;
 align-items:center;
`
const Title = styled.h1`
 color: white;
 margin-bottom:10px;
 margin-top:50px;
`
const Button = styled.button`
 border: none;
 padding:12px;
 font-weight: bold;
 color: gray;
 cursor: pointer;

`
const CategoryItme = ({item}) => {
    return (
        <Container>
          <Image src={item.img} />
          <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
          </Info>
        </Container>
    );
};

export default CategoryItme;