import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Data } from 'src/app/Class/data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newQuote = new Data(0,"","","", new Date())
  
  @Output() addQuote:any = new EventEmitter<Data>();

  formGroup!: FormGroup;
  submitQuote(){
      this.addQuote.emit(this.newQuote);

  }
  
  ngOnInit(): void {
  }
  

}


