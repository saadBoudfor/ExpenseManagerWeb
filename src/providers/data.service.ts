import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {HttpClient} from "@angular/common/http";

/**
 * Opêration  CRUD: delete, update, post and get Data from server.
 */
@Injectable()
export class DataService{

  private _root = 'http://localhost:2403/';
  set root(value: string) {
    this._root = value;
  }
  get root(): string {
    return this._root;
  }
  constructor(private http:Http, private https:HttpClient) {}

  getData(uri: string){
    return this.http.get(this._root + uri).map(res => res.json());
  }

  updateData(uri: string, data: any){
    return this.http.put(this._root + uri, data);
  }

  postData(uri: string, data: any){
    return this.https.post(this._root + 'food', {
      "name": "pomme",
      "price": "1.5",
      "nbrOfUses": "4",
      "category": "1",
      "quantity": "1.2",
      "metric": "2",
    });
  }

  deleteData(uri: string, id: string){
    return this.http.delete(this._root + uri + '/' + id);
  }
}
