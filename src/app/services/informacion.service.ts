import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InformacionService {

  dataObs: Observable<any>;
  data:any={};
  constructor(db: AngularFireDatabase) {
    this.dataObs = db.object('info').valueChanges();
  }
  getData(){
    this.dataObs.subscribe
    (info=> {
      if (info) {
        this.data = info;
      }
    });
  }

}
