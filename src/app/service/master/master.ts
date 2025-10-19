import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Master {
  $loginData: Subject<void> = new Subject<void>

  constructor(){}
}
