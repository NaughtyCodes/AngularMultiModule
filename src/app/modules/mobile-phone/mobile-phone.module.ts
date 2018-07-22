import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallComponent } from './call/call.component';
import { MessageComponent } from './message/message.component';
import { routing } from './mobile-phone.routing';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonService } from '../../shared/services/common.service';

@NgModule({
  imports: [
    NgxChartsModule,
    BrowserModule,
    CommonModule,
    Ng2GoogleChartsModule,
    ReactiveFormsModule,  
    routing,
    FormsModule
  ],
  providers: [],
  declarations: [CallComponent, MessageComponent, HeaderComponent, FooterComponent],
  exports: [CallComponent, MessageComponent, HeaderComponent, FooterComponent]
})
export class MobilePhoneModule { }
