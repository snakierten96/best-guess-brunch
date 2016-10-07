const persistState = require('redux-localstorage');
import * as createLogger from 'redux-logger';

import { IAppState, rootReducer, deimmutify, reimmutify } from './store';
import { ILineup, IParty } from './lineup';
import { IMenu, IMenuItem } from './menu'
import { ITable, ITables } from './tables';

export {
  IAppState,
  rootReducer,
  ILineup,
  IMenu,
  IMenuItem,
  IParty,
  ITable,
  ITables,
  reimmutify
};

export const middleware = [
  createLogger({
    level: 'info',
    collapsed: true,
    stateTransformer: deimmutify
  })
];

/*
export const enhancers = [
  persistState(
    '',{
      key: 'best-guess-brunch',
      serialize: s => JSON.stringify(deimmutify(s)),
      deserialize: s => reimmutify(JSON.parse(s))
    })
];
*/
