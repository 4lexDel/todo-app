import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  passwordRegExp!:RegExp;
  response!:string;
  process:boolean = false;

  constructor(private auth: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const usernameRegExp = /^.{4,13}$/;
    this.passwordRegExp = /^(?=.*\d).{4,16}$/;

    this.registerForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.pattern(usernameRegExp)]],
      password: [null,  [Validators.required, Validators.pattern(this.passwordRegExp)]],
    });
  }

  async onSubmitForm() {
    this.process = true;
    console.log(this.registerForm.value.username);
    this.response = await this.auth.register(this.registerForm.value);
    this.process = false;
  }

  login(){
    this.router.navigateByUrl("/auth/login");
  }
}
