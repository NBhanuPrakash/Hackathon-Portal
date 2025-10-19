import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiIntergration } from '../../service/api-intergration';

@Component({
  selector: 'app-register-events',
  imports: [ReactiveFormsModule],
  templateUrl: './register-events.html',
  styleUrl: './register-events.css',
})
export class RegisterEvents {
  submissionForm: FormGroup = new FormGroup({
    submissionId: new FormControl(0),
    competitionId: new FormControl(0),
    userId: new FormControl(0),
    projectTitle: new FormControl(''),
    description: new FormControl(''),
    githubLink: new FormControl(''),
    submissionDate: new FormControl(new Date()),
    status: new FormControl(''),
    rank: new FormControl(0),
  });

  apiService = inject(ApiIntergration);
constructor(private activatedRoute: ActivatedRoute) {
  this.activatedRoute.params.subscribe((res: any) => {
    if (res && res.id) {
      this.submissionForm.controls['competitionId'].setValue(+res.id);
    }
  });

  const localdata = localStorage.getItem('hackathon');
  if (localdata) {
    const parsedData = JSON.parse(localdata);
    if (parsedData.userId) {
      this.submissionForm.controls['userId'].setValue(parsedData.userId);
    }
  }
  this.submissionForm.controls['submissionDate'].setValue(new Date().toISOString());
  this.submissionForm.controls['status'].setValue('Approved');

}

  onSubmit(){
    const formData = this.submissionForm.value;
    console.log(formData);
    this.apiService.registerEvent(formData).subscribe({
      next:(res)=>{
        alert('Event Register SuccesFully');
      },
      error: (err)=>{
        alert('Event register Failed')
      }
    })
  }
}
