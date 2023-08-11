import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { StudentServiceService } from 'src/app/Services/student-service.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss'],
})
export class UploadFormComponent implements OnChanges {
  @Input() dataFromParent: any;
  showData: boolean = false;
  data: any;

  constructor(private service: StudentServiceService) {}
  getData(form: NgForm) {
   
    console.log(form.value);
    console.log(this.showData ? 'Text Box' : 'Multiple Choice');
    this.data = {
      Question: form.value.question,
      options: [
        form.value.opt1,
        form.value.opt2,
        form.value.opt3,
        form.value.opt4,
      ],
      Answer: form.value.optanswer,
    };

    console.log(this.data);
    this.service.addData(this.data, this.showData ? 'TQA' : 'MQA');
  }
  showTheNextField(data: string) {
    if (data == 'mul') {
      this.showData = false;
    } else {
      this.showData = true;
    }
  }

  ngOnChanges(change: SimpleChanges) {
    console.log(change);
  }

  changeChildData() {
    this.dataFromParent = 'child Hello';
  }
}
