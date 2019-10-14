import {useEffect, useState} from 'react';

import _ from 'lodash';

function random(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function useRandomiseString ({
  string, 
  randomCount=900000,
  delay=2,
}) {
  const [symbols, setSymbols] = useState({});
  useEffect(() => {
    const newSymbols = {};
    for(let i = 0; i < string.length && i < randomCount; i++) {
      if (string[i] !== ' ') newSymbols[i] = random(1);
    };
    setSymbols(newSymbols);
    const interval = setInterval(() => {
      const keys = Object.keys(newSymbols);
      delete newSymbols[keys[_.random(0, keys.length-1)]];
      setSymbols({...newSymbols})
    }, delay);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const splitString = string.split('');
  for (let i in symbols) {
    splitString[i] = symbols[i];
  }
  return splitString.join('');
} 