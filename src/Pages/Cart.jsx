import React from 'react';
import styled from 'styled-components';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Announcement from './../Components/Announcement';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from './../Responsive';

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding:'10px'})}
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    ${mobile({padding:'10px'})}
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' && 'none'};
    background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
    color: ${props => props.type === 'filled' && 'white'};
`
const TopTexts = styled.div`
${mobile({display:'none'})}
 
`
const TopText = styled.span`
 text-decoration: underline;
 margin: 0 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding:20px;
    ${mobile({flexDirection:'column',padding:'10px'})}
`
const Info = styled.div`
    flex: 3;
    
`
const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:'column'})}
`
const Image = styled.img`
width: 200px;
${mobile({width:'170px'})}
`
const ProductDetail = styled.div`
flex: 2;
display: flex;


`
const Details = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 20px;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductSize = styled.span``
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`
const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
font-size: 25px;
padding: 20px;
${mobile({padding:'10px'})}

`
const ProductPrice = styled.div`
font-size: 24px;
font-weight: 300;
${mobile({marginBottom:'10px'})}
`
const ProductAmount = styled.div`
font-weight:400;
margin:'0 10px'
`
const Hr = styled.hr`
    background-color: #eee;
    height: 1px;
    border: none;
`

const Summary = styled.div`
    flex: 1;
    border: 1px solid lightgray;
    padding: 20px;
    border-radius: 5px;
    height: 50vh;
   
`
const SummaryTitle = styled.h1`
font-weight:300;
margin-bottom: 12px;
`
const SummaryItem = styled.div`
display: flex;
justify-content: space-between;
margin: 30px 0;
font-weight: ${props => props.type ==='total' && 'bold'};
font-size: ${props => props.type ==='total' && '20px'};

`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
padding: 10px 20px;
background-color: black;
color: white;
width: 100%;
cursor: pointer;
`

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>Continue shoping</TopButton>
                    <TopTexts>
                        <TopText>Shoping bag(2)</TopText>
                        <TopText>Your wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>Checkout Now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                                <Details>
                                    <ProductName>
                                        <b>Product:</b> JESSIE THUNDER SHOES
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> 93813718293
                                    </ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize>
                                        <b>Size:</b> 37.5
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                                <Details>
                                    <ProductName>
                                        <b>Product:</b> HAKURA T-SHIRT
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> 93813718293
                                    </ProductId>
                                    <ProductColor color="gray" />
                                    <ProductSize>
                                        <b>Size:</b> M
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 20</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Cart;