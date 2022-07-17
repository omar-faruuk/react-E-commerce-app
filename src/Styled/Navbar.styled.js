import styled from "styled-components";
import {mobile} from '../Responsive'

export const Container = styled.div`
  height: 60px;
  ${mobile({height:'50px'})}
`
export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  ${mobile({padding:'10px 0'})}
`
export const Left = styled.div`
 display: flex;
 align-items:center;
 flex:1;
 span{
    font-size:14px;
    cursor: pointer;
    ${mobile({display:'none'})}
 }
`
export const SearchContainer = styled.div`
  display: flex;
  border: .5px solid lightGray;
  margin-left:15px;
  padding:5px;
  input {
    border: none;
    font-size:14px;
    outline:none;
    ${mobile({width:'60px'})}
  }
  svg{
    font-size:16px;
    color: gray;
  }
`
export const Center = styled.div`
 flex:1;
 text-align:center;
 h1{
    font-weight:bold;
    ${mobile({fontSize:'25px'})}
 }
 
`
export const Right = styled.div`
 flex:1;
 display: flex;
 justify-content: flex-end;
 ${mobile({flex:'2', justifyContent: 'center'})}
`
export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({marginLeft: '10px'})}
  
  
`