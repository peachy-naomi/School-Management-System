import { useState, createContext, useContext } from 'react';
import Component2 from './comp2';

// const UserContext = createContext();
export const UserContext = createContext()

function Component1() {
  const [user, setUser] = useState("Naomi");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

export default Component1