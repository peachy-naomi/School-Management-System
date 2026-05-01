import { useState, createContext, useContext } from 'react';
import Component3 from './comp3';


function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

export default Component2