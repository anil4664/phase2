import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorService } from '../validator.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  messageForm: FormGroup;
  submitted: boolean= false;
  success: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private validatorService: ValidatorService) { }

  ngOnInit(): void {
    this.messageForm= this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required]
    })
  }
  onSubmit(){
    this.submitted= true;
    if(this.messageForm.invalid)
      return;
    this.success= true;
    this.validatorService.submitted=true;
    console.log(this.validatorService.submitted);
    this.router.navigate(['/']);
  }

}
