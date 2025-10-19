import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompetitionModel } from '../../models/competitionModel';
import { ApiIntergration } from '../../service/api-intergration';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  imports: [FormsModule, CommonModule],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events implements OnInit {


  ngOnInit(): void {
    this.getAllCompetition();
  }
  competitionObj: CompetitionModel = {
    competitionId: 0,
    title: '',
    description: '',
    startDate: new Date(),
    endDate: new Date(),
    status: '',
  };

  competitionResp: CompetitionModel[] = [];

  apiService = inject(ApiIntergration);

  onCompetionSub() {
    this.apiService.createCompetition(this.competitionObj).subscribe({
      next: (res)=>{
        alert("Succesfully Created the Competition");
        this.getAllCompetition();
        this.competitionObj = {
          competitionId: 0,
          title: '',
          description: '',
          startDate: new Date(),
          endDate: new Date(),
          status: '',
        };
      },
      error:(err)=>{
        alert("Competition not created");
      }
    })
  }

  getAllCompetition(){
    this.apiService.getAllCompetition().subscribe({
      next: (res: CompetitionModel[])=>{
        this.competitionResp = res.filter(c => c.status.toLowerCase() === 'active');
        console.log(this.competitionResp);
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }
}
