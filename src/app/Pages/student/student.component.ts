import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/Services/student-service.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  show: boolean = true;
  data: any;
  data2: any;

  passMark: number = 40;
  constructor(private questions: StudentServiceService) {}
  setQA(status: boolean) {
    this.show = status;
  }

  ngOnInit(): void {
    this.data2 = this.questions.mData;
    this.data = this.questions.tData;
  }
}
