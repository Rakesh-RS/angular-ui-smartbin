import { HttpClient } from '@angular/common/http';
import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TestComponent } from '../test/test.component';
export interface UsersData {
  
  id: number;
  name: string;
  city:string;
  address:string;
  zipCode:number;
  mobileNumber:string;
  emailId:string;
vechileNumber:string;
workingArea:string;

	

}
 

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {


   endpoint = 'http://localhost:8080/smartbin/api/user';
  ngOnInit(): void {
  }
  action:string;
  local_data:any;
  constructor(private http: HttpClient,
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }
 
  doAction(){debugger;
    if (this.action=='update') {
      this.http.put(this.endpoint+'/update',this.local_data).subscribe(data => {  
        window.alert("user updated ");
        console.log("one user added"+this.local_data.name);
       },  
         error => {  
           alert(error);  
         });
         
    } else if(this.action=='Add')
    {
     
      this.http.post(this.endpoint+'/add',this.local_data).subscribe(data => {  
        alert("one user added"+this.local_data.name);
        console.log("one user added"+this.local_data.name);
       },  
         error => {  
           alert(error);  
         });

    }
    else{
        
      this.http.delete(this.endpoint+'/delete/'+this.local_data.id).subscribe(data => {  
        alert("one user delted "+this.local_data.name);
        console.log("deleted user "+this.local_data.name);
       },  
         error => {  
           alert(error);  
         });
      
    }

    location.reload(true);
      
    this.dialogRef.close({event:this.action,data:this.local_data});
  }
 
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
