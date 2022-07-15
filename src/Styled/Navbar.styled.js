import styled from "styled-components";


export const Container = styled.div`
  height: 60px;
`
export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items:center;
`
export const Left = styled.div`
 display: flex;
 align-items:center;
 flex:1;
 span{
    font-size:14px;
    cursor: pointer;
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
 }
 
`
export const Right = styled.div`
 flex:1;
 display: flex;
 justify-content: flex-end;
`
export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  
`