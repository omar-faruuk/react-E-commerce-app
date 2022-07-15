import React from 'react';
import styled from 'styled-components';
import { popularProducts } from './../Data';
import Product from './Product';

const Container = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
padding: 20px;

`

const Products = () => {
    return (
        <Container>
           {
            popularProducts.map(product => <Product product={product}/>)
           }
        </Container>
    );
};

export default Products;