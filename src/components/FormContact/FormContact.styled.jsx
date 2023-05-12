import styled from "styled-components";

export const FormContainer = styled.div`
  text-align: center;
  margin-bottom: 15px;
`

export const FormEl = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 3px;
  text-align: start;
  font-size: 18px;
`
export const FormInput = styled.input`
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
export const FormButton = styled.button`
  width: 200px;
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