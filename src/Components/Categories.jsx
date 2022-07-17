import React from 'react';
import  styled  from 'styled-components';
import { categories } from '../Data';
import CategoryItme from './CategoryItme';
import { mobile } from './../Responsive';

const Container = styled.div`
 display: flex;
 justify-content: space-between;
 padding: 20px;
 ${mobile({flexDirection:'column',padding:'0'})}

`

const Categories = () => {
    return (
        <Container>
          {
            categories.map(item => <CategoryItme item={item}/>)
          }  
        </Container>
    );
};

export default Categories;