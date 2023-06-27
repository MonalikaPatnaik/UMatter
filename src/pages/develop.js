import React from 'react';
import construct from '../images/construct.png';

const Develop = (props) => {
  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <h1 style={{ fontSize: 40, fontWeight: 'bold' }}>UMatter Development</h1>
      <p style={{ fontSize: 20, marginBottom: 0 }}>This page is currently under development. Please check back later.</p>
      <div style={{ marginTop: 10 }}>
        <img src={construct} alt="Under Development" />
      </div>
    </div>
  );
};

export default Develop;
