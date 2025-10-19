import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiIntergration } from '../../service/api-intergration';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Master } from '../../service/master/master';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  isLoginFormVisable = signal<boolean>(false);

  registerObj: any = {
    fullName: '',
    email: '',
    password: '',
    collegeName: '',
    role: '',
  };

  loginObj: any = {
    email: '',
    password: ''
  }

  apiService = inject(ApiIntergration);
  router = inject(Router);
  msaterService = inject(Master);

  toggleForm() {
    this.isLoginFormVisable.set(!this.isLoginFormVisable());
  }

  onRegister() {
    this.apiService.userRegistraion(this.registerObj).subscribe({
      next: (res) => {
        alert('Successfully Registered');
        this.registerObj = {
          fullName: ' ',
          email: ' ',
          password: ' ',
          collegeName: ' ',
          role: ' ',
        };
        this.isLoginFormVisable.set(true);
      },
      error: (err) => {
        alert('Registration Failed. Try again');
        this.registerObj = {
          fullName: ' ',
          email: ' ',
          password: ' ',
          collegeName: ' ',
          role: ' ',
        };
      },
    });
  }

  onLogin() {
    this.apiService.userLogin(this.loginObj).subscribe({
      next: (res)=>{
        localStorage.setItem('hackathon',JSON.stringify(res));
        this.router.navigateByUrl('/home');
        this.msaterService.$loginData.next();
        this.loginObj = {
          email: '',
          password: '',
        };
      },
      error: (err)=>{
        alert('username or password incorrect');
        this.loginObj = {
          email: '',
          password: '',
        };
      }
    })
  }
}
