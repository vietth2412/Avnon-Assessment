import { Router, } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IQuestion } from '../../interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

  constructor(private modalService: NgbModal, private dataService: DataService, private router: Router) { }
  questions: IQuestion[] = []
  ngOnInit(): void {
    this.getQuestions()
  }
  openModalQuestion(content: any) {
    this.modalService.open(content, { centered: true });
  }
  onCreateSuccess() {
    this.modalService.dismissAll();
    this.getQuestions();
  }
  getQuestions() {
    this.questions = this.dataService.getQuestions();
  }
  viewAnswer() {
    if (this.validateAnswer()) {
      this.router.navigate(['form/answer'])
    }

  }
  validateAnswer() {
    const questions = this.dataService.getQuestions();
    const listInvalidOtherAnswer = questions.filter((x: IQuestion) => x.haveOtherAnswer && !x.otherAnswer);
    if (listInvalidOtherAnswer.length == 0) {
      return true
    } else {
      const errorMessage = `You must write answer for other option of questions: 
      ${listInvalidOtherAnswer.map((x: IQuestion) => `
      `+ x.question)}`
      alert(errorMessage)
      return false;
    }

  }
}
