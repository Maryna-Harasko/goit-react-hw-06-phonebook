import styled from "styled-components";

export const BtnDelete = styled.button`
  width: 100px;
  height: 36px;
  background-color: #3160cd;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  transition: border 250ms ease, box-shadow 250ms ease;

  &:hover,
  &:focus{
    border: 1px solid #fff;
    box-shadow: 0px 1px 7px 1px #373333;
  }
`