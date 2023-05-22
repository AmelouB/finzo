import React, { useState } from 'react';
import '../common/bankcardform.css';



const BankCardForm = () => {
  const [nickname, setNickname] = useState('');
  const [color, setColor] = useState('orange');
  const [icon, setIcon] = useState('horse');

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '50%' }}>
        <form>
          <label>
            Nickname:
            <input type="text" value={nickname} onChange={e => setNickname(e.target.value)} />
          </label>
          <label>
            Color:
            <select value={color} onChange={e => setColor(e.target.value)}>
              <option value="orange">Orange</option>
              <option value="pink">Pink</option>
            </select>
          </label>
          <label>
            Icon:
            <select value={icon} onChange={e => setIcon(e.target.value)}>
              <option value="horse">Horse</option>
              <option value="cat">Cat</option>
            </select>
          </label>
        </form>
      </div>
      <div style={{ width: '50%', backgroundColor: color }}>
        <h2>{nickname}</h2>
        <img src={icon === 'horse' ? 'http://cdn.onlinewebfonts.com/svg/img_74663.png' : 'http://www.clipartbest.com/cliparts/9TR/Lkr/9TRLkrnAc.png'} alt={icon} />

      </div>
    </div>
  );
};

export default BankCardForm;