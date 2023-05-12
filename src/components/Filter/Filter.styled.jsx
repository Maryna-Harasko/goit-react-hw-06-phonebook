import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 15px;
`

export const FilterLabel = styled.label`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3px;
  text-align: start;
  font-size: 18px;
`
export const FilterInput = styled.input`
  padding-left: 5px;
  height: 36px;
  width: 560px;
  border: 1px solid #133450;
  border-radius: 10px;
  outline: none;
  transition: border-color 250ms ease, box-shadow 250ms ease;

  &::placeholder{
    font-size: 14px;
    padding-left: 5px;
  }

  &:hover,
  &:focus,
  &:active{
    border-color: #3160cd;
    box-shadow: 0px 1px 7px 1px #373333;
  }
`