import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  submitted: boolean= false;
  constructor() { }
}
