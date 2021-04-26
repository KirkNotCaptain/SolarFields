import React, { createContext } from 'react';

const SFContext = React.createContext({
  counter: 0,
  solarFieldData: {},
  changeSolarFieldData: (data) => {},
});

export default SFContext;
