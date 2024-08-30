import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  sidebarShow = new BehaviorSubject(false);

  constructor() { }
}
