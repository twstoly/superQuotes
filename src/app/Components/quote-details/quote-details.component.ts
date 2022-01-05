import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from 'src/app/Class/data';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input()
  quote!: Data;
  @Output() iscomplete: any = new EventEmitter<boolean>();
  quoteComplete(complete: boolean){
    this.iscomplete.emit(complete)
  }
  
  @Output()
  numberOfLikes: number = 0;

  likeBtnClick(){
    this.numberOfLikes++;
  }
  dislikeBtnClick(){
    if(this.numberOfLikes > 0){
      this.numberOfLikes--
    }
  }


  ngOnInit(): void {
  }

}
