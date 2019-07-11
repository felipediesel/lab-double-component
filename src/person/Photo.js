import React from 'react';
import logo from '../logo.svg';

function Photo() {
  return (
    <p>
      Person Photo:
      <img src={logo} width="200px" alt="logo" class="spinning" />
    </p>
  );
}

export default Photo;
