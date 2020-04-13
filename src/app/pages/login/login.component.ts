import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from 'app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private loginService: LoginService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.spinner.show();
    const body = 'username=' + this.loginForm.get('username').value + '&password=' + this.loginForm.get('password').value;
    console.log('body ', body);
    this.loginService.loginUser(body).subscribe((res: any) => {
      this.spinner.hide();
      console.log(res);
      this.router.navigate(['/category']);
      // tslint:disable-next-line:max-line-length
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEyLCJuYW1lIjoiQW5hIEJlYXV0eSIsImlhdCI6MTU4NTg1MTU2MX0.ZppDjVxAGD_CwlIDBJeIm8iD5T8ktZzW3CDs0-Gs2DY');
      if (res.access_key) {
        localStorage.setItem('token', res.access_key);
        // this.router.navigate(['/category']);
      }
    }, err => {
      console.log(err);
    });
  }

}
