import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Center, Container, Left, MenuItem, Right, SearchContainer, Wrapper } from '../Styled/Navbar.styled';

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <span>EN</span>
                    <SearchContainer>
                        <input type="text" placeholder='searach' />
                        <Search/>
                    </SearchContainer>
                </Left>
                <Center>
                    <h1>OMAR.</h1>
                </Center>
                <Right>
                    <MenuItem><Link to="home">Home</Link></MenuItem>
                    <MenuItem><Link to="/register">Register</Link></MenuItem>
                    <MenuItem><Link to="/login">Login</Link></MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color='secondary'>
                        <ShoppingCartOutlined/>
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;