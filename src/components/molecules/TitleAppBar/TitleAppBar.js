import React from 'react';
import './TitleAppBar.css';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function TitleAppBar(props) {

  const location = 'Tokopedia Tower';
  
  return (
    <div className="TitleAppBar">
      <h5>ALAMAT PENERIMA</h5>
      <div className='locationFrame' onClick={() => console.log('location')}>
        <h3>{location}</h3>
        <ExpandMoreIcon/>
      </div>
    </div>
  );
}
