import React, { createContext } from 'react';

const SFContext = React.createContext({
  solarFieldData: {},
  changeSolarFieldData: (data) => {},
});

export default SFContext;
