import  styled  from 'styled-components';
import { mobile } from './../Responsive';

export const Container = styled.div`
  width: 100%;
  height:100vh;
  display: flex;
  position: relative;
  overflow:hidden;
  ${mobile({display:'none'})}
`
export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius:50%;
  display: flex;
  align-items:center;
  justify-content:center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props)=> props.direction === 'left' && '10px'};
  right: ${(props)=> props.direction === 'right' && '10px'};
  margin:auto;
  cursor: pointer;
  z-index: 2;
`
export const Wrapper = styled.div`
  height:100%;
  display: flex;
  transform:translateX(${(props)=> props.slideIndex * -100}vw);
  transition: .5s ease;
  
`
export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items:center;
  background-color:lightBlue;
  /* padding:0 2rem; */

`
export const ImageContainer = styled.div`
  height:100%;
  flex: 1;
`
export const Image = styled.img`
  height:100%;
`
export const InfoContainer = styled.div`
  flex:1;
  padding:40px;
`
export const Title = styled.h1`
  font-size:70px;
`
export const Des = styled.p`
  font-size:20px;
  margin: 20px 0;
  font-weight: 500;
`
export const Button = styled.button`
  font-style: 20px;
  background-color:transparent;
  padding: 10px;
  cursor: pointer;
`