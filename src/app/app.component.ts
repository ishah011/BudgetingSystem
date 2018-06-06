import { Component } from '@angular/core';
import { NavbarService } from './services/navbar.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NavbarService]
})
export class AppComponent {
  title = 'Budgeting System';
  selectedValue:string;

  constructor(private _navbarService: NavbarService){}

  ngOnInit(){
    this.selectedValue = this._navbarService.getNavigation();
  }
}
