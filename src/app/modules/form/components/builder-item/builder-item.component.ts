import { QUESTION_TYPE } from './../../../../constants/index';
import { Component, OnInit, Input } from '@angular/core';
import { IQuestion } from '../../interfaces';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-builder-item',
  templateUrl: './builder-item.component.html',
  styleUrls: ['./builder-item.component.scss']
})
export class BuilderItemComponent implements OnInit {
  QUESTION_TYPE = QUESTION_TYPE;
  @Input()
  data!: IQuestion;
  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
  }

}
