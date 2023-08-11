import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { StudentServiceService } from '../Services/student-service.service';

@Component({
  selector: 'app-examiner',
  templateUrl: './examiner.component.html',
  styleUrls: ['./examiner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExaminerComponent implements OnInit, OnChanges, OnDestroy {
  data1: any;
  data2: any;
  conf: boolean = false;
  statusOfDailog: boolean = false;
  statusOfDailog2: boolean = false;
  statusOfDailog3: boolean = false;
  deleteDailog: boolean = false;
  formData: any;

  constructor(private data: StudentServiceService) {}


  openDeleteDailog() {
    this.deleteDailog = true;
  }
  childDataDelete($event: any) {
    this.deleteDailog = $event;
  }
  addQuesToForm() {
    console.log('Still in build..');
    this.statusOfDailog = true;
  }

  editMFormModal() {
    // console.log($event);
    // this.openModal();
    this.statusOfDailog3 = true;
  }
  editTFormModal() {
    // console.log($event);
    // this.openModal();
    this.statusOfDailog2 = true;
  }

  getAllFormData(val: any) {
    // console.log(val);
    console.log(val.question.value);
    console.log(val.Answer.value);
    console.log(val.score.value);
    this.statusOfDailog2 = false;
  }

  getAllFormTData(val: any) {
    // console.log(val);
    console.log(val.question.value);
    console.log(val.Answer.value);
    console.log(val.options.value);
    this.statusOfDailog2 = false;
  }

  childData($event: any) {
    // console.log($event);
    this.statusOfDailog = $event;
  }

  childData2($event: any) {
    // console.log($event);
    this.statusOfDailog2 = $event;
  }
  childData3($event: any) {
    // console.log($event);
    this.statusOfDailog3 = $event;
  }

  editTheData(data: any) {
    console.log('Editing the Data', data);
    this.formData = data;
    this.editTFormModal();
    this.editMFormModal();
  }

  editTData(data: any) {
    console.log('Editing the Data', data);
    this.formData = data;
    this.editTFormModal();
    // this.editMFormModal();
  }
  editMData(data: any) {
    console.log('Editing the Data', data);
    this.formData = data;
    // this.editTFormModal();
    this.editMFormModal();
  }
  send(status: boolean) {
    this.deleteDailog = status;
  }

  deleteTheData(data: any) {
    // this.conf = confirm('Are you sure ?');
    this.openDeleteDailog();
    this.conf = this.deleteDailog;
    if (this.conf) {
      this.data1.filter((item: any) => {
        return item.id != data.id;
      });

      this.data1.splice(this.data1.indexOf(data), 1);
      console.error('Deleted Data : ', data);
    } else {
      console.warn('About to Delete ..', data);
    }
  }

  addTheData(data: any[]) {
    console.log('Adding the data', data);
    this.formData = data;

    console.log(this.formData.Question);
    // this.editMFormModal();
    this.addQuesToForm();
  }
  ngOnInit() {
    console.log('Init ..');
    this.data1 = this.data.mData;
    this.data2 = this.data.tData;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes ..');
  }

  ngOnDestroy(): void {
    console.log('Destroy ..');
  }
}
