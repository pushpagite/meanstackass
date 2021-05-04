import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { TestcomComponent } from './testcom/testcom.component';
import {MatInputModule} from '@angular/material/input';
import { NewUserComponent } from './new-user/new-user.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CreateUserComponent } from './create-user/create-user.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LogoutCompComponent } from './logout-comp/logout-comp.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {MatTableModule} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { GraphModuleComponent } from './graph-module/graph-module.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { UserActionComponent } from './user-action/user-action.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';











@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    TestcomComponent,
    NewUserComponent,
    CreateUserComponent,
    LogoutCompComponent,
    UserDetailsComponent,
    BarChartComponent,
    GraphModuleComponent,
    PageNotFoundComponent,
    UserActionComponent,
    UpdateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    HttpClientModule,
    MatPaginatorModule,
    NgxPaginationModule,
    Ng2OrderModule ,


    
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
