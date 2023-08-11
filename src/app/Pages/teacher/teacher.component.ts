import { Component } from '@angular/core';
import { StudentServiceService } from 'src/app/Services/student-service.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent {
  QCount: any[] = [1, 1, 1, 1];
  dataToChild: any = '🍓';

  constructor(private data: StudentServiceService) {}
  changeChildData() {
    this.dataToChild = 'welcome';
  }

}
