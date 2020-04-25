import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

//import $ from 'jquery';
import { Label } from 'ng2-charts';




export interface PeriodicElement {
  depth: string;
 
  
}


const endpoint = 'http://localhost:8080/smartbin/api/sensor';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Component({
  selector: 'app-binlevel',
  templateUrl: './binlevel.component.html',
  styleUrls: ['./binlevel.component.scss']
})
export class BinlevelComponent implements OnInit {
  //displayed: string ="Sensor data";
  
  //pie
  public full:number;
 public pieChartLabels:string[] = ['Full', 'Empty'];
  public pieChartData:number[] = [this.full,100-this.full,10,90];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


  
  private serverUrl = 'http://localhost:8080/smartbin/sensor-websocket'
  private title = 'WebSockets chat';
  private stompClient;

  dataSource :any = "Start";
  depth: string;
  condition : boolean = false;
  constructor(private http:HttpClient) { 
  //  this._getSensorData();
    this.initializeWebSocketConnection();
  }

  ngOnInit(): void {
  }
  _getSensorData() {
    this.http.get(endpoint).subscribe((data: String) => 
    this.dataSource = data,
    error => () => {
        console.log('error Something went wrong...');
    },
    () => {
      console.log('success Getting all Users complete');
        
    });
    // this.dataSource=this.http.get(endpoint);
    // this.depth=this.http.get(endpoint).toString();
  }
  initializeWebSocketConnection(){
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe("/enable-broker/updates", (message) => {
        if(message.body) { debugger;
          that.dataSource = message.body;
          //this.full=message.body;
         // that.condition = (message.body)%2==0?true:false;
         // $(".chat").append("<div class='message'>"+message.body+"</div>")
          console.log(message.body);
          console.log(that.dataSource);
        }
      });
    });
  }

  sendMessage(message){
    this.stompClient.send("/app/send/message" , {}, message);
    //$('#input').val('');
  }

}
