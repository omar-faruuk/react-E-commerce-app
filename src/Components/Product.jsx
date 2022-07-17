import { FavoriteBorderOutlined,  SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { Center } from './../Styled/Navbar.styled';

const Info = styled.div`
opacity:0;
display: flex;
z-index:3;
justify-content: center;
width: 100%;
height: 100%;
align-items:center;
position:absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
transition: .5s ease;
`
const Container = styled.div`
 flex: 1;
 min-width: 280px;
 height: 350px;
 background-color: rgba(120, 159, 158, 0.867);
 margin: 5px;
 position:relative;
 display: flex;
 align-items:center;
 justify-content:center;
 
 &:hover ${Info}{
    opacity:1;
 }

`
const Circle = styled.div`
 width:250px;
 height:250px;
 border-radius:50%;
 background-color: white;
 position:absolute;
 

`
const Image = styled.img`
 height: 75%;
 z-index:2;

`



const Icon = styled.div`
 width: 40px;
 height: 40px;
 background-color: white;
 border-radius:50%;
 display: flex;
 align-items:center;
 justify-content:center;
 margin: 8px;
 cursor: pointer;
 transition:.5s ease;
 &:hover{
    transform:scale(1.1);
 }


`
const Product = ({product}) => {
    return (
        <Container>
          <Circle></Circle>
          <Image src={product.img}/>
          <Info>
            <Icon>
               <ShoppingCartOutlined/>  
            </Icon>
            <Icon>
               <SearchOutlined/>
            </Icon>
            <Icon>
              <FavoriteBorderOutlined/>
            </Icon>
          </Info>

        </Container>
    );
};

export default Product;