import { Component, Input, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/Services/student-service.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-mcqs',
  templateUrl: './mcqs.component.html',
  styleUrls: ['./mcqs.component.scss'],
})
export class McqsComponent implements OnInit {
  @Input() type: boolean = false;

  @Input() mdata: any;

  @Input() passPercent: number = 100;
  ansStatus: boolean = false;
  submitted:boolean =false;
  noOfQuestion: number = -1;
  passMark: number = 0;
  // constructor(private questions: StudentServiceService) {}

  verify(data: any) {
    // this.passMark = this.mdata.length / 2;
    for (let i = 0; i < this.mdata.length; i++) {
      if (this.mdata[i].Answer == data[i]) {
        this.ansStatus = false;
        this.noOfQuestion++;
      }
    }

    // if (this.data2[0].Answer == data['0']) {
    //   this.ansStatus = false;
    //   this.noOfQuestion++;
    // }

    if ((this.ansStatus = true && this.noOfQuestion + 1 == this.mdata.length)) {
      this.ansStatus = true;
    } else {
      this.ansStatus = false;
    }
    
  }
  checkAnswer(Form: NgForm) {
    // console.log('UT : ', Form.untouched);
    // console.log('T : ', Form.touched);
    this.noOfQuestion = -1;
    this.verify(Form.value);
    this.submitted=true;
    // console.log(this.noOfQuestion);
  }

  ngOnInit(): void {
    this.passMark = (this.passPercent / 100) * this.mdata.length;
  }
}
