import React from 'react';
import '../common/middlebanner.css';
import { Link } from 'react-router-dom';


function MiddleBanner(props) {
  const { imgSrc, headerText, paragraphText, buttonText, buttonLink, showBorder } = props;

  const borderStyle = showBorder ? {
    border: '10px solid #A459D1',
    borderRadius: '20px',
    padding: '30px'
  } : {};

  return (
      <div className="middle-container">
      <div className='grid-item'style={borderStyle}>
        <img src={imgSrc} alt='card' />
        <h3 className='column-header'>{headerText}</h3>
        <p className='column-par'>{paragraphText}</p>
        <Link to={buttonLink}>
          <button className='customise'>{buttonText}</button>
        </Link>
      </div>
      
      </div>
  );
}

export default MiddleBanner;
