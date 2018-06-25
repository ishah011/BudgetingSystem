import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavbarService } from './services/navbar.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NavbarService]
})
export class AppComponent {
  title = 'Budgeting System';
  selectedValue:string;
  _subscription: Subscription;

  constructor(private _navbarService: NavbarService){
    this._subscription = this._navbarService.currentNavigation.subscribe((value) => {
      this.selectedValue = value;
    });
  }

  ngOnInit(){}

  ngOnDestroy(){
    this._subscription.unsubscribe();
  }
}
