import { ITable, ITables } from './tables.types';
import { tableReducer } from './tables.reducer';
import { deimmutifyTables, reimmutifyTables } from './tables.transformers';

export {
  ITable,
  ITables,
  tableReducer,
  deimmutifyTables,
  reimmutifyTables
};