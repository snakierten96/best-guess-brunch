import { PARTY_JOINED, PARTY_LEFT } from '../constants';
import { INgRedux } from 'ng-redux';
import { IAppState } from '../store';
import { PartySevice } from '../services';

export class LineupActions {
  
  constructor(
    private _ngRedux: INgRedux,
    private _party: PartySevice) { }
    
  joinLine = ({ numberOfPeople, partyName }) => {
    return this._party.getNextPartyId().then(partyId => {
      return this._ngRedux.dispatch({
        type: PARTY_JOINED,
        payload: {
          numberOfPeople,
          partyName
        }
      });
    });
  };
  
  leaveLine = ({ partyId }) => {
    return this._ngRedux.dispatch({
      type: PARTY_LEFT,
      payload: {
        partyId: parseInt(partyId, 10)
      }
    });
  };
    
}