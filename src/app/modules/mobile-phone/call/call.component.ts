import { Component, OnInit } from '@angular/core';
import { ViewChild, AfterViewInit, ElementRef, Input, HostListener } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
//import {single} from '../../../shared/mock/treeData';
import { CommonService } from '../../../shared/services/common.service';
import {HttpClient} from "@angular/common/http";
import { Subscription } from 'rxjs';
import * as shape from 'd3-shape';
import * as d3 from 'd3';


@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit {

  @ViewChild("callPara", {read: ElementRef}) callPara: ElementRef;
  public currentUser: String = "Krish Nan";
  public isDisplay: Boolean = true;
  public view: any[] = [700, 400];
  public changeData: boolean = true;
  public pathFlow: any[] = [];
  public sumBy: string = 'value';
  public chartData: any[] = [];
  public currentState: String;
  private subscription: Subscription;

  constructor(
    private commonService: CommonService,
    private http: HttpClient
  ) {
    this.treemapProcess();
  }

  ngAfterViewInit() {
    
  }

  ngOnInit() {
    this.initChart('LOB','','');
    
  }

  gdpLabelFormatting(c) {
    return `<br/><small class="number-card-label">GDP Per Capita</small>`;
  }

  currencyFormatting(c): string {
    return `\$${Math.round(c.value).toLocaleString()}`;
  }

  // LOB > MNEMONIC > DATABASE > INSTANCE 
  initChart(key: String, pathFlow: any, urlParam: string){
    this.commonService.getDetails(key, pathFlow, urlParam).subscribe (
      data  => { 
        //console.log(JSON.stringify(data)); 
        this.chartData = data;
        this.currentState = key === 'LOB' ? 'MNEMONIC'      : 
                            key === 'MNEMONIC' ? 'DATABASE' :
                            key === 'DATABASE' ? 'INSTANCE' : 'LOB';
      },
      err   => { 
        console.error('Observer got an error: ' + err.message); 
        console.error('Observer got an error: ' + err.error.error);
        console.error('Observer got an error: ' + err.error.text);
      }
    );
  }

  colorScheme = {
    domain: [
      //'#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00', '#ff6f00'
      //'#FAC51D', '#66BD6D', '#FAA026', '#29BB9C', '#E96B56', '#55ACD2', '#B7332F', '#2C83C9', '#9166B8', '#92E7E8'
      '#55C22D', '#C1F33D', '#3CC099', '#AFFFFF', '#8CFC9D', '#76CFFA', '#BA60FB', '#EE6490', '#C42A1C', '#FC9F32'
    ]
  };
  
  onSelect(event) {
    //console.log(event);
    let flow = {};
    this.currentState === 'MNEMONIC'  ? this.pathFlow[0]=event : '';
    this.currentState === 'DATABASE'  ? this.pathFlow[1]=event : '';
    this.currentState === 'INSTANCE'  ? this.pathFlow[2]=event : '';
    this.currentState === 'LOB'       ? this.pathFlow[3]=event : '';
    this.initChart(this.currentState,'','');
    console.log(this.pathFlow);
  }

  pathFlowCall(item){
    //console.clear;
    console.log(item);
    if (this.pathFlow.indexOf(item) === 0){
      console.log('key => MNEMONIC :: param =>' + this.pathFlow[0].name);
      this.initChart('MNEMONIC',[this.pathFlow[0].name],this.pathFlow[0].name);
    } else if (this.pathFlow.indexOf(item) === 1){
      console.log('key => DATABASE :: param =>' + this.pathFlow[0].name +' - '+ this.pathFlow[1].name);
      this.initChart('DATABASE',[this.pathFlow[0].name],this.pathFlow[1].name);
    } else if (this.pathFlow.indexOf(item) === 2){
      console.log('key => INSTANCE :: param =>' + this.pathFlow[0].name +' - '+ this.pathFlow[1].name +' - '+ this.pathFlow[2].name);
      this.initChart('INSTANCE',[this.pathFlow[0].name, this.pathFlow[1].name],this.pathFlow[2].name);
    }
    
  }
 
  click(event) {
    this.callPara.nativeElement.style.display = (this.isDisplay) ? 'block' : 'none';
    this.isDisplay = (this.isDisplay) ? false : true;
  }

  treemapProcess(sumBy = this.sumBy) {

    

  //   this.sumBy = sumBy;
  //   const children =  this.chartData;
  //   const value = (sumBy === 'Size') ? sumChildren(children) : countChildren(children);
  //   this.chartData = [children];
  //   //this.chartData = [{name: 'Top', children: [children], value }];

  //   function sumChildren(node) {
  //     return node.value = node.size || d3.sum(node.children, sumChildren);
  //   }

  //   function countChildren(node) {
  //     return node.value = node.children ? d3.sum(node.children, countChildren) : 1;
  //   }
   }



}
