import React from 'react';
import Products from '../Components/Products';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
import  styled from 'styled-components';
import Announcement from './../Components/Announcement';
import { mobile } from './../Responsive';

const Container = styled.div`
`
const Title = styled.h1`
 margin:20px;
 ${mobile({margin:'15px'})}
`
const FilterContainer = styled.div`
 display: flex;
 justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;
${mobile({display:'flex',flexDirection:'column'})}
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight:600;
  margin-right:20px;
  ${mobile({marginBottom:'10px'})}
`
const Select = styled.select`
padding: 10px;
margin-right:20px;
${mobile({marginBottom:'10px'})}

`
const Option = styled.option`
font-weight:500;
`
const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Dresess</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>Red</Option>
                        <Option>Black</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                        <Option>Blue</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                 </Select>       
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    );
};

export default ProductList;