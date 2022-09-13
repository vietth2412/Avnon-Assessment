
import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../../interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {

  constructor(private dataService: DataService) { }
  questions: IQuestion[] = [];
  ngOnInit(): void {
    this.getQuestion()
  }
  getQuestion() {
    this.questions = this.dataService.getQuestions();
  }
}
