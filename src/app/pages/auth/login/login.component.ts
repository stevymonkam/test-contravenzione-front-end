import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  fa: FormGroup;

  constructor(fb: FormBuilder, private router: Router,private authService: AuthService) { 
    this.fa = fb.group({
      'email': [null, Validators.compose([Validators.required])],
      'password': [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  async login() {
    console.log("data");
    console.log(this.fa.value);
    await this.authService.login(this.fa.value.email, this.fa.value.password).then((res) =>{
      console.log(res);
      this.router.navigate(['home']);
      localStorage.setItem("token",res.token.original.access_token);
      localStorage.setItem("idUser",res.user.id);
    
    }).catch((error) => {
      console.log(error);
      //this.modalService.dismissAll();
    });;

  }




}
