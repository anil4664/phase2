import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '../validator.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-starttest',
  templateUrl: './starttest.component.html',
  styleUrls: ['./starttest.component.css']
})
export class StarttestComponent implements OnInit {

  constructor(private validatorService: ValidatorService, private router: Router) { }
  isLoggedIn: boolean= this.validatorService.submitted;
  ngOnInit(): void {
  }
  startTest(){
    console.log("test started");
    if(this.validatorService.submitted){
      console.log("already logged in");
      this.router.navigate(['/questions']);
    }
    else{
      console.log("not logged in ");
      this.router.navigate(['/login']);
    }
  }
}
