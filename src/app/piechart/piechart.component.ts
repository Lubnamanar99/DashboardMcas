import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'department', 'course', 'duration','eligibility'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
   

}
export interface PeriodicElement {
  department: string;
  position: number;
  course: string;
  duration: string;
  eligibility:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, department: 'Department of Commerce',course:'B.Com (Finance )', duration:'6 semesters',eligibility:'+2 in any group'},
  {position: 2, department: 'Department of English',course: '	BA Functional English	', duration: '6 semesters',eligibility:'+2 in any group'},
  {position: 3, department: 'Department of Computer Science & Application',course:'B.C.A', duration: '6 semesters',eligibility:'+2 in any group'},
  {position: 4, department: 'Department of Computer Science & Application', course:'Bsc.Computer Science', duration: '6 semesters',eligibility:'+2 in any group'},
  {position: 5, department: 'Department of Management', course:'B.B.A', duration:'6 semesters',eligibility:'+2 in any group'},
  {position: 6, department: 'Department of Science', course:'BSc Food Technology', duration:'6 semesters',eligibility:'+2 in any group'},
];


