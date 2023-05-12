import React from "react";
import PropTypes from 'prop-types';
import { BtnDelete } from "./ContactItem.styled";

export const ContactItem = (props) => {
  const { name, number, onDelete } = props;

  return (
    <>
    {name}: {number}
    <BtnDelete type="button" onClick={onDelete}>Delete</BtnDelete>
    </>
  )
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};