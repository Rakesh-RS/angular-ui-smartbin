import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule,} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule , ReactiveFormsModule}   from '@angular/forms';
import { MymapComponent } from './mymap/mymap.component';
import { ChartsModule } from 'ng2-charts';
//import { ResultComponent } from './result/result.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContactusComponent } from './contactus/contactus.component';
import { TestComponent } from './test/test.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule }    from '@angular/common/http';
import { SliderModule } from 'angular-image-slider';
import { BinlevelComponent } from './binlevel/binlevel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MymapComponent,
    //ResultComponent,
    //MapComponent,
     ContactusComponent,
     TestComponent,
    // HttpClientModule,
    DataTableComponent,
  //  DialogBoxComponent,
    BinlevelComponent,
  DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule, 
    MatTableModule,
    ChartsModule ,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    SliderModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBTWIvuxT5xw0Bz5QpVVF_51770P7CE50g',
      libraries: ['places']
      /* apiKey is required, unless you are a 
      premium customer, in which case you can 
      use clientId 
      */
    }),
    BrowserAnimationsModule   
  ],
  entryComponents: [
    DialogBoxComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AngularMaterialModule {}
