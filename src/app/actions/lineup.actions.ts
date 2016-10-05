import { PARTY_JOINED, PARTY_LEFT } from '../constants';
import { IAppState } from '../store';
import { INgRedux } from 'ng-redux';

export class LineupActions {
  
  constructor(private _ngRedux: INgRedux) { }
    
  joinLine = ({ numberOfPeople, partyName }) => {
    return this._ngRedux.dispatch({
      type: PARTY_JOINED,
      payload: {
        numberOfPeople,
        partyName
      }
    });
  };
  
  leaveLine = ({ partyId }) => {
    return this._ngRedux.dispatch({
      type: PARTY_LEFT,
      payload: {
        partyId: parseInt(partyId, 10);
      }
    });
  };
      
    
}