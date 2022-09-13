import { IQuestion } from './../interfaces/index';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public questions: IQuestion[] = [];
  constructor() { }
  public addQuestion(q: IQuestion) {
    const id = Math.floor(Math.random() * 1000);
    this.questions.push({
      ...q,
      id
    })
  }
  public removeQuestion(id: number) {
    this.questions = this.questions.filter(x => x.id != id)
  }
  public getQuestions() {
    return this.questions
  }
}
