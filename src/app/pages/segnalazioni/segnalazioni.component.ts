import { Component, OnInit, ViewChild } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import {  MatSort } from '@angular/material/sort';
import {MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


export interface PeriodicElement {
  societa: string;
  cod: string;
  tipologia: string;
  sede: string;
  stato: string;
  segnalazioni: string;

}

export interface conttatoElement {
  sel: string;
  tipologia: string;
  contratto: string;
  note: string;
  documenti: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {societa: '1', cod: 'Hydrogen', tipologia: '1.0079', sede: 'H', stato: 'H', segnalazioni: 'H'},
  {societa: '1', cod: 'Hydrogen', tipologia: '1.0079', sede: 'H', stato: 'H', segnalazioni: 'H'},
  {societa: '1', cod: 'Hydrogen', tipologia: '1.0079', sede: 'H', stato: 'H', segnalazioni: 'H'},
  {societa: '1', cod: 'Hydrogen', tipologia: '1.0079', sede: 'H', stato: 'H', segnalazioni: 'H'},
  {societa: '1', cod: 'Hydrogen', tipologia: '1.0079', sede: 'H', stato: 'H', segnalazioni: 'H'},
  {societa: '1', cod: 'Hydrogen', tipologia: '1.0079', sede: 'H', stato: 'H', segnalazioni: 'H'},
];

const conttatoElement: conttatoElement[] = [
  {sel: '', tipologia: '', contratto: '', note: '', documenti: 'contratto.pdf'},
  {sel: '', tipologia: '', contratto: '', note: '', documenti: ''},
  {sel: '', tipologia: '', contratto: '', note: '', documenti: ''},
];


@Component({
  selector: 'app-segnalazioni',
  templateUrl: './segnalazioni.component.html',
  styleUrls: ['./segnalazioni.component.scss']
})
export class SegnalazioniComponent implements OnInit {

 //@ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['societa', 'cod', 'tipologia', 'sede','stato','segnalazioni'];
  dataSource:any=ELEMENT_DATA;
  displayedColumns1: string[] = ['sel', 'tipologia', 'contratto', 'note', 'documenti'];
  dataSource1:any=conttatoElement;
  faCoffee = faCoffee;
  valid:boolean = false;

  constructor( private modalService: NgbModal, private router: Router ) {
    //this.paginator = ;
    //this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    //setTimeout(() => this.dataSource.paginator = this.paginator);
    //setTimeout(() => this.dataSource.sort = this.sort);
  }

  onChangeSelect() {
    //console.log(hello);
  }


  home() {
    this.router.navigate(['home']);

  }

  inter() {
    this.router.navigate(['interrogazioni']);
  }

  nouva() {
    this.router.navigate(['footer']);

  }

  public doFilter = () => {
    this.dataSource.filter = "";
  };

  async openModalAdd(targetModal:any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: "static",
      size: 'xl',
    });
  }

  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

}
