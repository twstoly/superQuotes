import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/Class/data';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quote!:Data
  constructor() { }

  ngOnInit(): void {
  }

}
