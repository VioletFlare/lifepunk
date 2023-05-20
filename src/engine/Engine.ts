import PouchDB from 'pouchdb';

class Engine {

  protected db: PouchDB.Database;

  constructor() {
    this.db = new PouchDB('lifepunk');
  }

}

export default Engine;
