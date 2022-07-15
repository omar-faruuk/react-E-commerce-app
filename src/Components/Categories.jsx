import React from 'react';
import  styled  from 'styled-components';
import { categories } from '../Data';
import CategoryItme from './CategoryItme';

const Container = styled.div`
 display: flex;
 justify-content: space-between;
 padding: 20px;

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