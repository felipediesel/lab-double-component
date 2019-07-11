import React from 'react';
import logo from '../logo.svg';

function Photo() {
  return (
    <p>
      User Photo:
      <img src={logo} width="200px" alt="logo" />
    </p>
  );
}

export default Photo;
