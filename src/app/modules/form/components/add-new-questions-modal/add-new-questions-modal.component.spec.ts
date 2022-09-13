import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewQuestionsModalComponent } from './add-new-questions-modal.component';

describe('AddNewQuestionsModalComponent', () => {
  let component: AddNewQuestionsModalComponent;
  let fixture: ComponentFixture<AddNewQuestionsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewQuestionsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewQuestionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
