import React from "react";
import './FormattedDate.scss';

const FormattedDate = (props) => {
  return (
    <h2>
      It is {props.date.toLocaleTimeString()}
    </h2>
  )
};

export default FormattedDate;