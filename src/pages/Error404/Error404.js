import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.css';

export default function Error404() {
  return (
    <div className="rootError404">
      <h2>Halaman tidak ditemukan</h2>
      <Link to="/">
        <button className="button" variant="contained">
          Kembali ke Homepage
        </button>
      </Link>
    </div>
  );
}
