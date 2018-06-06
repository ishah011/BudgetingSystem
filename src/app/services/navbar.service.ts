import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {
  selectedValue: string = "Home";
  constructor() { }

  setNavigation(inputValue:string): void{
    this.selectedValue = inputValue;
  }

  getNavigation(): string{
    return this.selectedValue;
  }
}
