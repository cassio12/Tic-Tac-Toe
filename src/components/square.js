// import { render } from '@testing-library/react';/
import React from 'react';
import '../App.css';

function Square (props) {
  let gambling = () => {
    props.onClick()
  }

  return (
    <button 
    className="square" 
    onClick={gambling}>
      {props.value}
    </button>
  );
  
}

export default Square;