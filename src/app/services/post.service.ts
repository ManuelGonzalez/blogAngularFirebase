import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class PostService {

  postsObs: Observable<any[]>;
  posts:any[];
  aux:number=25;
  end: BehaviorSubject<number|null>;
  cargando:boolean=true;

  constructor(db: AngularFireDatabase) {
    this.end = new BehaviorSubject(this.aux);
    this.postsObs = this.end.switchMap(id =>
      db.list('posts', ref =>
        id ? ref.orderByChild('id').endAt(id) : ref
      ).valueChanges());
  }
  getListPost(){
    this.postsObs.subscribe
    (posts=> {
      if (posts) {
        this.posts = posts;
        this.cargando=false;
      }
    });
  }
  paginations() {
    console.log(this.aux);
    this.end.next(this.aux);
    this.getListPost();
  }
  next(){
    this.cargando=true;
    this.aux=this.aux+25;
    this.paginations();
  }
}
