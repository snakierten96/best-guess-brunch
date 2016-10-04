import { combineReducers } from 'redux';
import * as lineup from './lineup';
import * as tables from './tables';

export interface IAppState {
  lineup?: lineup.ILineup;
  tables?: tables.ITables;
};

export const rootReducer = combineReducers<IAppState>({
  lineup: lineup.lineupReducer,
  tables: tables.tableReducer
});

export function deimmutify(state: IAppState): Object {
  return {
    lineup: lineup.deimmutifyLineup(state.lineup),
    tables: tables.deimmutifyTables(state.tables)
  };
}

export function reimmutify(plain): IAppState {
  return plain ? {
    lineup: lineup.reimmutifyLineup(plain.lineup),
    tables: tables.reimmutifyTables(plain.tables)
  } : {};
}