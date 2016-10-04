const persistState = require('redux-localstorage');
import * as createLogger from 'redux-logger';

import { IAppState, rootReducer, deimmutify, reimmutify } from './store';
import { ILineup, IParty } from './lineup';
import { ITable, ITables } from './tables';

export {
  IAppState,
  rootReducer,
  ILineup,
  IParty,
  ITable,
  ITables
};

export const middleware = [
  createLogger({
    level: 'info',
    collapsed: true,
    stateTransformer: deimmutify
  })
];

export const enhancers = [
  persistState(
    '',{
      key: 'best-guess-brunch',
      serialize: s => JSON.stringify(deimmutify(s)),
      deserialize: s => reimmutify(JSON.parse(s))
    })
];
