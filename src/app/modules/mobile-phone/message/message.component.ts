import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from '../../../shared/services/common.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  public pieChartData: any;
  private subscription: Subscription;
  constructor(private commonService: CommonService) { }

  @Output() valueChange1 = new EventEmitter();
  valueChanged1($event) { this.valueChange1.emit($event); }

  @Output() valueChange2 = new EventEmitter();
  valueChanged2($event) { this.valueChange2.emit($event); }
  
  @Output() valueChange3 = new EventEmitter();
  valueChanged3($event) { this.valueChange3.emit($event); }
  
  @Output() valueChange4 = new EventEmitter();
  valueChanged4($event) { this.valueChange4.emit($event); }
  
  ngOnInit() {
    this.subscription = this.commonService.notifyObservable$.subscribe((res) => {
      if (res.hasOwnProperty('option') && res.option === 'call_child') {
        console.log(res.value);

      }
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
