import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class NavbarService {
  selectedValue: string = "Home";
  navigationChange = new BehaviorSubject<string>(this.selectedValue);
  currentNavigation = this.navigationChange.asObservable();
  constructor() { }

  setNavigation(inputValue:string): void{
    this.selectedValue = inputValue;
    this.navigationChange.next(this.selectedValue);
  }
}
