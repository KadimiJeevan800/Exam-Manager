import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeacherComponent } from './Pages/teacher/teacher.component';
import { StudentComponent } from './Pages/student/student.component';
import { AboutComponent } from './about/about.component';
import { PrepareATestComponent } from './prepare-a-test/prepare-a-test.component';
import { ExaminerComponent } from './examiner/examiner.component';
import { NopageComponent } from './components/nopage/nopage.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'teacher',
    component: TeacherComponent,
  },
  {
    path: 'student',
    component: StudentComponent,
  },
  {
    path: 'examiner',
    component: ExaminerComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    component: NopageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
