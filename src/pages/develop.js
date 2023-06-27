import React from 'react';
import construct from '../images/construct.png';

const Develop = (props) => {
  return (
    <div className="container">
      <h1 style={{ fontSize: 40, fontWeight: 'bold' }} >Under Development</h1>
      <div>
        <img src={construct} alt="Under Development"/>
      </div>
      <p style={{ fontSize: 20 }}>This page is currently under development. Please check back later.</p>
    </div>
  );
};

export default Develop;
