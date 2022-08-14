import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import clothImg from '../image/ant-miner-VK48kub0ibk-unsplash.jpg';
import { mobile } from './../Responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
 

`
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({padding:'10px',flexDirection:"column"})}

`
const ImgContainer = styled.div`
flex:1;

`
const Image = styled.img`
width: 100%;
height: 80vh;
object-fit:cover;
${mobile({height:'45vh'})}

`
const InfoContainer = styled.div`
flex:1;
padding: 0 50px;
${mobile({padding:'10px'})}

`
const Title = styled.h1`
font-weight:300;
margin-bottom:20px;

`
const Desc = styled.p`
font-weight:400;
margin-bottom:12px;

`
const Price = styled.span`
  font-size:24px;
  font-weight:300;
`
const FilterContainer = styled.div`
display: flex;
width: 50%;
justify-content:space-between;
margin: 30px 0;
${mobile({width:'100%'})}

`
const Filter = styled.div`
 display: flex;
`
const FilterTitle = styled.h3`
  margin-right:10px;
  font-weight:300;
  font-size:20px;
`
const FilterColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius:50%;
   background-color:${props => props.color} ;
   margin-right:10px;
   cursor: pointer;
`
const FilterSize = styled.select`

`
const FilterOption = styled.option`
`
const AddContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content:space-between;
  ${mobile({width:'100%'})}
`
const AddAmount = styled.div`
display: flex;
align-items:center;
justify-content:center;
svg{
  cursor: pointer;
  
}
`
const Ammount = styled.span`
border: 1px solid lightgray;
width: 30px;
height: 30px;
display: flex;
align-items:center;
justify-content:center;
font-weight: bold;
`
const RemoveAmount = styled.div`
`
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
  ${mobile({padding:'10px'})}
`;
const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src={clothImg} />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis hic necessitatibus, optio quo laborum sit aliquid est. Fugit qui tempora ratione magni est quibusdam quisquam nulla facere magnam consectetur sapiente in quasi aliquid neque quae a ipsa, ipsum, quis excepturi. Dignissimos illo recusandae consequatur assumenda ducimus saepe commodi hic vitae.</Desc>
                    <Price>$20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color:</FilterTitle>
                            <FilterColor color="gray"></FilterColor>
                            <FilterColor color="black"></FilterColor>
                            <FilterColor color="lightblue"></FilterColor>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size:</FilterTitle>
                            <FilterSize>
                                <FilterOption>XS</FilterOption>
                                <FilterOption>S</FilterOption>
                                <FilterOption>M</FilterOption>
                                <FilterOption>L</FilterOption>
                                <FilterOption>XL</FilterOption>
                            </FilterSize>
                        </Filter>

                    </FilterContainer>
                    <AddContainer>
                        <AddAmount>
                            <Remove />
                            <Ammount>1</Ammount>
                            <Add />
                        </AddAmount>
                        <Link to=""><Button>ADD TO CART</Button></Link>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default Product;