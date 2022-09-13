import { DataService } from './../../services/data.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QUESTION_TYPE } from 'src/app/constants';
import { IQuestion } from '../../interfaces';

@Component({
  selector: 'app-add-new-questions-modal',
  templateUrl: './add-new-questions-modal.component.html',
  styleUrls: ['./add-new-questions-modal.component.scss']
})
export class AddNewQuestionsModalComponent implements OnInit {
  public QUESTION_TYPE = QUESTION_TYPE;
  maxAnswerOptions = 5;
  
  @Output() onCreateSuccess = new EventEmitter();
  newQuestionForm = this.fb.group({
    type: [QUESTION_TYPE.Checkbox_List],
    question: [''],
    answers: this.fb.array([]),
    specifyAnswer: [false],
    requireField: [false],
  });
  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.onChangeType()
  }
  onSubmit() {
    this.dataService.addQuestion(this.newQuestionForm.value as IQuestion)
    this.onCreateSuccess.emit()
  }
  createAnswerItem() {
    return this.fb.group({
      title: ['', Validators.required],
    })
  }
  addAnswer() {
    const answers = this.newQuestionForm.get('answers') as FormArray;
    console.log(answers.length);
    if (answers.length >= this.maxAnswerOptions) {
      alert(`Max answer option: ${this.maxAnswerOptions}`)
      return
    }
    answers.push(this.createAnswerItem())
  }
  onChangeType() {
    this.newQuestionForm.get('type')?.valueChanges.subscribe(() => {
      const answers = this.newQuestionForm.get('answers') as FormArray;
      answers.clear()
    })
  }
}
