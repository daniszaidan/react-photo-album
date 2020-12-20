import React from 'react';
import './AppBar.css';

import ActionAppBar from './../../molecules/ActionAppBar'
import TitleAppBar from './../../molecules/TitleAppBar'

export default function AppBar(props) {
  
  return (
    <div className="appbar">
      <ActionAppBar/>
      <TitleAppBar/>
    </div>
  );
}
