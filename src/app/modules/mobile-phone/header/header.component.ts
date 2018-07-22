import { Component, OnInit, Input } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() currentUser: string; 

  constructor() { }

  callMethod() {
    alert('calling from another component');
    //new CallComponent().click();
    //this.callComponent.click();
  }

  ngOnInit() {
  }

}
