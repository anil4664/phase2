import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questionNumber = 1;
  isSubmitted= false;
  score=0;
  input: any;
  messageForm: FormGroup;
  answers: any;
  allAnswers : any=[];
  questions: any=[
    {question:"Which one of the following is used to represent the supporting many-one relationships of a weak entity set in an entity-relationship diagram ?", 
    options:["Diamonds with double/bold border","Rectangles with double/bold border","Ovals with double/bold border","Ovals that contain underlined identifiers"],answer:"1"},
    {question:"What is the worst case time complexity of inserting n elements into an empty linked list, if the linked list needs to be maintained in sorted order ?", 
    options:["Θ(n)","Θ(n log n)","Θ(n*n)","Θ(1)"],  answer: "3"},
    {question:"Let G be a group of 35 elements. Then the largest possible size of a subgroup of G other than G itself is ________ .", 
    options:["1","5","7","35"], answer:"3"},
    {question:"A multiplexer is placed between a group of 32 registers and an accumulator to regulate data movement such that at any given point in time the content of only one register will move to the accumulator. The number of select lines needed for the multiplexer is _________ .", 
    options:["5","6","4","7"], answer:"1"},
    {question: "If there are m input lines n output lines for a decoder that is used to uniquely address a byte addressable 1 KB RAM, then the minimum value of m+n is ________ .", 
    options: [ "18", "1034", "10", "1024" ], answer: "2"},
    {question: "Consider a double hashing scheme in which the primary hash function is h1(k) = k mod 23, and the secondary hash function is h2(k) = 1+(k mod 19). Assume that the table size is 23. Then the address returned by probe 1 in the probe sequence (assume that the probe sequence begins at probe 0) for key value k = 90 is ________", 
    options: [ "13", "15", "21", "23" ], answer: "1"},
    {question: "Assume that you have made a request for a web page through your web browser to a web server. Initially the browser cache is empty. Further, the browser is configured to send HTTP requests in non-persistent mode. The web page contains text and five very small images.The minimum number of TCP connections required to display the web page completely in your browser is ________ .", 
    options: [ "6", "7", "8", "9" ], answer: "1"},
    {question: "Assume that you have made a request for a web page through your web browser to a web server. Initially the browser cache is empty. Further, the browser is configured to send HTTP requests in non-persistent mode. The web page contains text and five very small images.The minimum number of TCP connections required to display the web page completely in your browser is ________ .", 
    options: [ "0x40800000", "0xC0800000", "0x83400000", "0xC8500000" ], answer: "2"},
    {question: "Consider a relational table R that is in 3NF, but not in BCNF. Which one of the following statements is TRUE ?", 
    options: [ "R has a nontrivial functional dependency X→A, where X is not a superkey and A is a prime attribute", "R has a nontrivial functional dependency X→A, where X is not a superkey and A is a non-prime attribute and X is not a proper subset of any key", "A cell in R holds a set instead of an atomic value", "none of the above" ], answer: "1"},
    {question: "Which one of the following is NOT a valid identity?", 
    options: [ "(x ⊕ y) ⊕ z = x ⊕ (y ⊕ z)", "(x + y) ⊕ z = x ⊕ (y + z)", "x ⊕ y = x + y, if xy = 0", "x ⊕ y = (xy + x'y')'" ], answer: "2"},
    {question: "Which of the following protocol pairs can be used to send and retrieve e-mails (in that order)?", 
    options: [ "IMAP POP3", "SMTP, POP3", "SMTP, MIME", "IMAP, SMTP" ], answer: "2"},
    {question: "An array of 25 distinct elements is to be sorted using quicksort. Assume that the pivot element is chosen uniformly at random. The probability that the pivot element gets placed in the worst possible location in the first round of partitioning (rounded off to 2 decimal places) is _________. ", 
    options: [ "0.08", "0.04", "0.01", "0.123" ], answer: "1"},
    {question: "The value of 351 mod 5 is _________ .", 
    options: [ "1", "2", "4", "70" ], answer: "1"},
    {question: "Consider three machines M, N and P with IP addresses 100.10.5.2, 100.10.5.5 and 100.10.5.6 respectively. The subnet mask is set to 255.255.255.252 for all the three machines. Which one of the following is true?", 
    options: [ "M, N and P all belong to the same subnet", "Only N and P belong to the same subnet", "Only M and N belong to the same subnet", "M, N, and P belong to three different subnets" ], answer: "2"},
    {question: "Consider that 15 machines need to be connected in a LAN using 8-port Ethernet switches. Assume that these switches do not have any separate up link ports. The minimum number of switches needed is ___________.", 
    options: [ "3", "4", "5", "6" ], answer: "1"},
    {question: "What is the minimum number of 2-input NOR gates required to implement 4-variable function expressed in sum-of-minterms from as f = Σ(0, 2, 5, 7, 8, 10, 13, 15)? Assume that all the inputs and their complements are available. Answer ________ .", 
    options: [ "3", "4", "5", "6" ], answer: "1"}
  ]
  constructor(private formBuilder: FormBuilder) {
    /*this.messageForm= this.formBuilder.group({
      answer: ['', Validators.required]
    })*/
   }
  /*messageForm= this.formBuilder.group({
    answer: ['', Validators.required]
  })*/
  ngOnInit(): void {
    this.messageForm= this.formBuilder.group({
      answer: ['', Validators.required]
    })
  }
  prevQuestion()
  {
    let prevAnswer : any;
    if(this.questionNumber>1)
    {
      this.questionNumber-=1;
      prevAnswer= document.getElementById("option1");
      prevAnswer.checked=false;
      prevAnswer= document.getElementById("option2");
      prevAnswer.checked=false;
      prevAnswer= document.getElementById("option3");
      prevAnswer.checked=false;
      prevAnswer= document.getElementById("option4");
      prevAnswer.checked=false;
      prevAnswer = document.getElementById("option"+this.allAnswers[this.questionNumber-1]);
      prevAnswer.checked=true;
    }
      
      console.log(JSON.stringify(this.messageForm.value));
  }
  onSubmit() {
    console.log("sumbmitted")
    this.isSubmitted = true;
    if(!this.messageForm.valid) {
      return false;
    } else {
      //alert(JSON.stringify(this.messageForm.value))
      console.log(JSON.stringify(this.messageForm.value));
      this.input=JSON.stringify(this.messageForm.value);
      this.answers = this.input[this.input.indexOf(":")+2];
      this.allAnswers.push(this.answers);
      if(this.answers==this.questions[this.questionNumber-1].answer){
        this.score++;
      }
      this.questionNumber++;
    }
  }  
}
