import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { Arrow, Button, Container, Des, Image, ImageContainer, InfoContainer, Slide, Title, Wrapper } from '../Styled/Slider.styled';
import slideImg from '../image/slideImg.png'
import { sliderItems } from '../Data';
import { Link } from 'react-router-dom';


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
          setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
          setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
      };
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {
                    sliderItems.map(item => (
                        <Slide>
                            <ImageContainer>
                                <Image src={item.img} alt='' />
                            </ImageContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Des>{item.desc}</Des>
                                <Link to="products"><Button>SHOP NOW</Button></Link>
                            </InfoContainer>
                        </Slide>
                    ))
                }
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
};

export default Slider;