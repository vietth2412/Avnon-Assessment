import { QUESTION_TYPE } from 'src/app/constants';
export interface IQuestion {
    id?: number;
    type: string;
    question: string;
    answers: ICheckboxAnswer[];
    specifyAnswer: boolean;
    requireField: boolean;
    haveOtherAnswer?:boolean;
    otherAnswer?: string;
    paragraphAnswer?: string;
}
export interface ICheckboxAnswer {
    title: string,
    checked?: boolean
}