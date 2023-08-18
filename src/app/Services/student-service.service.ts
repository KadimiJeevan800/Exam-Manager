import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import MulData from '../Data/MulQT.json';
import MulData from '../Data/azure.json'
import TextData from '../Data/TextQT.json';

@Injectable({
  providedIn: 'root',
})
export class StudentServiceService implements OnInit {
  mData: any;
  tData: any;
  constructor() {
    this.mData = MulData;
    this.tData = TextData;
  }
  ngOnInit(): void {
    console.log(MulData);
  }

  addData(text: any, type: String) {
    if (type == 'MQA') {
      this.mData.push(text);
    } else if (type == 'TQA') {
      this.tData.push(text);
    } else {
      console.warn('Invalid type of Service,check the student.service file');
    }
  }
}
