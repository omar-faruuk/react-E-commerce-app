import React from 'react';
import  styled  from 'styled-components';

const Container = styled.div`
  background-color: teal;
  height: 30px;
  display: flex;
  align-items:center;
  justify-content:center;
  color: white;
  font-style: 14px;
  text-align: center;
`

const Announcement = () => {
    return (
        <Container>
            Super deal! free shipping on an order $50
        </Container>
    );
};

export default Announcement;