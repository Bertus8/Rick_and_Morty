import React, { useContext, useState} from 'react';

const Context = () => {
    const CountContext = React.createContext(15);
    const count = useContext(CountContext);
  return <div>
      <CountContext.Provider value={ count }>
        { count }
      </CountContext.Provider>
  </div>;
};

export default Context;
