import { IQuestion } from './../../interfaces/index';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-item',
  templateUrl: './answer-item.component.html',
  styleUrls: ['./answer-item.component.scss']
})
export class AnswerItemComponent implements OnInit {
  @Input()
  data!: IQuestion;
  constructor() { }

  ngOnInit(): void {
  }

}
