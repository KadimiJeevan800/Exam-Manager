import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UploadFormComponent } from './Forms/upload-form/upload-form.component';
import { ShowFormComponent } from './Forms/show-form/show-form.component';
import { TeacherComponent } from './Pages/teacher/teacher.component';
import { StudentComponent } from './Pages/student/student.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { PrepareATestComponent } from './prepare-a-test/prepare-a-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ExaminerComponent } from './examiner/examiner.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { McqsComponent } from './components/mcqs/mcqs.component';
import { TqsComponent } from './components/tqs/tqs.component';
import { NopageComponent } from './components/nopage/nopage.component';
import { DailogBoxComponent } from './components/dailog-box/dailog-box.component';
import { MatChipsModule } from '@angular/material/chips';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UploadFormComponent,
    ShowFormComponent,
    TeacherComponent,
    StudentComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    DashboardComponent,
    AboutComponent,
    PrepareATestComponent,
    ExaminerComponent,
    McqsComponent,
    TqsComponent,
    NopageComponent,
    DailogBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatExpansionModule,
    MatTabsModule,
    MatChipsModule,
    StoreModule.forRoot({count :counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
