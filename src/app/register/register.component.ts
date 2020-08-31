import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorService } from '../validator.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  messageForm: FormGroup;
  submitted: boolean= false;
  success: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private validatorService: ValidatorService) { }

  ngOnInit(): void {
    this.messageForm= this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      username:['', Validators.required],
      password:['', Validators.required]
    })
  }
  onSubmit(){
    this.submitted= true;
    if(this.messageForm.invalid)
      return;
    this.success= true;
    console.log(this.validatorService.submitted);
    this.validatorService.submitted=true;
    console.log(this.validatorService.submitted);
    this.router.navigate(['/']);
  }

}
