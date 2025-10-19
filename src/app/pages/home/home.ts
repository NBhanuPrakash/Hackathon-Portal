import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { CompetitionModel } from '../../models/competitionModel';
import { ApiIntergration } from '../../service/api-intergration';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  $eventList: Observable<CompetitionModel[]> = new Observable<CompetitionModel[]>;

  apiService = inject(ApiIntergration);
  router = inject(Router);
  localData: any
  constructor(){
    this.$eventList = this.apiService.getAllCompetition();
  }

  onEventRegister(id:number){
    const localData = localStorage.getItem('hackathon');
    if(localData!=null){
      this.router.navigateByUrl(`/register-event/${id}`);
    } else {
      this.router.navigateByUrl('/register')
    }
  }
}
