import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[NavbarService]
})
export class HeaderComponent implements OnInit {
  selectedValue: string = "Home";
  constructor(private _navbarService: NavbarService) { }

  ngOnInit() {
    this._navbarService.setNavigation(this.selectedValue);
  }

  changeSelection(selection): void{
    this.selectedValue = selection.srcElement.text;
    this._navbarService.setNavigation(this.selectedValue);
  }

}
