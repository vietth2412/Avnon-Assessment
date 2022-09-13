import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuilderComponent } from './pages/builder/builder.component';
import { AnswersComponent } from './pages/answers/answers.component';
import { RouterModule, Routes } from '@angular/router';
import { AddNewQuestionsModalComponent } from './components/add-new-questions-modal/add-new-questions-modal.component';
import { BuilderItemComponent } from './components/builder-item/builder-item.component';
import { AnswerItemComponent } from './components/answer-item/answer-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'builder', component: BuilderComponent },
  { path: 'answer', component: AnswersComponent },
];

@NgModule({
  declarations: [
    BuilderComponent,
    AnswersComponent,
    AddNewQuestionsModalComponent,
    BuilderItemComponent,
    AnswerItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class FormModule { }
