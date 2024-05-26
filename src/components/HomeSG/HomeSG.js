// HomeSG.js
import React from 'react';
import { Header } from './heading/Header';
import { Homec } from './Homec/Homec';
import './HomeSG.css';  // Asegúrate de que este archivo se importe primero


export const HomeSG = () => {
  return (
    <>
      <Header />
      <Homec />
    </>
  );
};

export default HomeSG;
