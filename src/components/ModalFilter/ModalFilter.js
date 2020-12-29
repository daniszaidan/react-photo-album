import React from 'react';
import './ModalFilter.css';

import Dialog from '@material-ui/core/Dialog';

export default function ModalFilter(props) {
  const { open, onClose, dataUser, handleFilter, getAllData } = props;
  // console.log('dataUser', dataUser);

  return (
    <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth="sm">
      <div className="dialog-root">
        <h3 className="dialog-title">Filter data berdasarkan : </h3>
        <div className="name-list" onClick={() => getAllData()}>
          All Data
        </div>
        {dataUser.map((item, index) => (
          <div
            key={index}
            className="name-list"
            onClick={() => handleFilter(item.id)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </Dialog>
  );
}
