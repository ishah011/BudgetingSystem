import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedValue: string = "Home";
  _subscription: Subscription;

  constructor(private _navbarService: NavbarService) {
    this._subscription = this._navbarService.currentNavigation.subscribe((value) => {
      this.selectedValue = value;
    });
  }

  changeSelection(selection): void{
    this.selectedValue = selection.srcElement.text;
    this._navbarService.setNavigation(this.selectedValue);
  }

  ngOnInit() {}

  ngOnDestroy(){
    this._subscription.unsubscribe();
  }

}
