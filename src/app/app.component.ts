import {Component, OnInit} from '@angular/core';
import {DataService} from "../providers/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private _content: any;
  private _isLoading: boolean = true;

  get isLoading(): boolean {
    return this._isLoading;
  }
  get content(): any {
    return this._content;
  }
  constructor(private dataService: DataService) {}

  ngOnInit() : void{
    this.dataService.getData('food').subscribe(data => {
      this._content = data;
      this._isLoading = false;
    });
  }

  // TODO: remove this block.
  updateData(){
    if(!this._isLoading){
      this.dataService.postData('food',  {
        "name": "pomme",
        "price": "1.5",
        "nbrOfUses": "4",
        "category": "1",
        "quantity": "1.2",
        "metric": "2",
        "id": "0f37601723cb99df"
      }).subscribe(response => console.log(response));
    }
  }
}
