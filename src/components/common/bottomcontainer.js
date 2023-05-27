import React from 'react';
import '../common/bottomcontainer.css';

function BottomContainer(props) {
  const {paragraphText} = props;

  return (
    <div className='bottom-container'>
      <div className='grid-item'>
        <p className='bottom-par'>{paragraphText}</p>
      </div>
    </div>
  );
}

export default BottomContainer;