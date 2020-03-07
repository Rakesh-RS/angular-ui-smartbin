import { Component, OnInit,ViewChild } from '@angular/core';
//import { MatTableDataSource } from '@angular/material';
import { MatDialogModule} from '@angular/material/dialog';
import { MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

//import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const endpoint = 'http://localhost:8080/smartbin/api/user/all';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent  implements OnInit {
  displayedColumns: string[] = ['NAME', 'CITY', 'ADDRESS', 'ZIPCODE','MOBILE','EMAIL'];

  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
 dialog : any;
 table :any;
dataSource :any =[];
  constructor(private http:HttpClient) { 
    
    //this.dataSource  =ELEMENT_DATA;
    this._getAllUser();
  }

  // ngOnInit(): void {
  //  }

   _getAllUser(){
    this.http.get(endpoint).subscribe((data: any[]) => 
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
  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(TestComponent, {
      width: '250px',
      data:obj
    });
 
    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }
 
  addRowData(row_obj){
    var d = new Date();
    this.dataSource.push({
      id:d.getTime(),
      name:row_obj.name
    });
    this.table.renderRows();
    
  }
  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
      }
      return true;
    });
  }
  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }
 //@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  //dataSource = new MatTableDataSource<PeriodicElement>();
}
