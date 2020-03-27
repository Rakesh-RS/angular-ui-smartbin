import { Component, OnInit,ViewChild } from '@angular/core';
//import { MatTableDataSource } from '@angular/material';
import { MatDialogModule} from '@angular/material/dialog';
import { MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {  DialogBoxComponent } from '../dialog-box/dialog-box.component';
//import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const endpoint = 'http://localhost:8080/smartbin/api/user/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
// ];

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent  implements OnInit {
  displayedColumns: string[] = ['NAME', 'CITY', 'ADDRESS', 'ZIPCODE','MOBILE','EMAIL','ACTIONS'];

  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  
 //dialog : any;
 table :any;
dataSource :any =[];
  constructor(private http:HttpClient,public dialog:MatDialog) { 
    
    //this.dataSource  =ELEMENT_DATA;
    this._getAllUser();
  }

  // ngOnInit(): void {
  //  }

   _getAllUser(){
    this.http.get(endpoint+'all').subscribe((data: any[]) => 
    this.dataSource = new MatTableDataSource<any>(data),
    error => () => { debugger;
      alert('error Something went wrong...');
        console.log('error Something went wrong...');
    },
    () => {
      console.log('success Getting all Users complete');
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
    });
   // this.dataSource.sort = this.sort;
   this.table=this.dataSource;
  }
  openDialog(action,obj) { debugger;
    obj.action = action;
    
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '600px',
      data:obj
    });debugger;
    if(action=='Add')
    {
      this.addRowData(obj);
    }
    else if (action=='Update') {debugger;
      this.updateRowData(obj);
      
    } else {
      this.deleteRowData(obj.id);
    }
 
    dialogRef.afterClosed().subscribe(result => {
      //console.log("closing to the dialog");
      if(result.event == 'Add'){
        this.addRowData(result.data);
        
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
       // console.log("updating");
        
      }else {
        this.deleteRowData(result.data);
      }
    });
  }
  
 
  addRowData(row_obj){ debugger;
    console.log(row_obj,"add row");
    this.http.post(endpoint+'add', row_obj);
    // var d = new Date();
    // this.dataSource.push({
    //   id:d.getTime(),
    //   name:row_obj.name
    // });
    // this.table.renderRows();
    
  }
  updateRowData(row_obj){debugger;
    console.log(row_obj,"from update");
    this.http.put(endpoint+"update",row_obj).subscribe(data => {  
     alert(data);
     console.log(data);
    },  
      error => {  
        alert(error);  
      });


    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
      }
      return true;
    });
  }
  
  deleteRowData(row_obj){debugger;
    // this.dataSource = this.dataSource.filter((value,key)=>{
    //   return value.id != row_obj.id;
    // });
  }

  
 
}
