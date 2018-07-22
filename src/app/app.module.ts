import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MobilePhoneModule } from './modules/mobile-phone/mobile-phone.module';
import { CalculatorModule } from './modules/calculator/calculator.module';
import { AppRoutingModule } from './app.routing.module';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";import { CommonService } from './shared/services/common.service';



import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxChartsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    Ng2GoogleChartsModule,
    MobilePhoneModule,
    ReactiveFormsModule,
    CalculatorModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
