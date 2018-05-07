import React from 'react';

const Button = ({ text, click }) => (
  <button type="button" className="btn btn-primary w-100" onClick={() => click()}>{text}</button>
);

export default Button;