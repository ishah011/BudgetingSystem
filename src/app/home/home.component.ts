import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _api: ApiService) { }

  getApiHome(): Observable<string>{
    return this._api.getHome();
  }

  

  ngOnInit() {
  }

}
