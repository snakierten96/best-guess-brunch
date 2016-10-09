const localStorage = require('store');

export class PartySevice {

  getNextPartyId(): Promise<number> {
    return new Promise((resolve, reject) => {
      let partyId = localStorage.get('partyId') as number;
      partyId = typeof partyId === 'undefined' ? 1 : ++partyId;
      localStorage.set('partyId', partyId);
      resolve(partyId);
    });
  }
}