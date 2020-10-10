import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Chat from './chat/Chat';

import './Imessage.css';

function Imessage() {
  return (
    <div className='imessage'>
 
      <Sidebar />
      <Chat />
    </div>
  )
}

export default Imessage;
