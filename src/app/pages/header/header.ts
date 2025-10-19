import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Master } from '../../service/master/master';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
loggedData: any;
  masterService = inject(Master);
  router = inject(Router)

  constructor() {
    this.readLocalData();
    this.masterService.$loginData.subscribe((res) => {
      this.readLocalData();
    });
  }

  readLocalData() {
    const storage = localStorage.getItem('hackathon');
    if (storage != null) {
      this.loggedData = JSON.parse(storage);
      console.log(this.loggedData);
    }
  }

  onLogOff() {
    localStorage.removeItem('hackathon');
    this.loggedData = undefined;
    this.router.navigateByUrl('/home');
  }
}
