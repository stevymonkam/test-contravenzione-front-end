import { Component, OnInit, ViewChild } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import {  MatSort } from '@angular/material/sort';
import {MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormValidationService } from 'src/app/service/validation/form-validation.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { ContratService } from 'src/app/service/contrat/contrat.service';



export interface PeriodicElement {
  societa: string;
  cod: string;
  tipologia: string;
  sede: string;
  stato: string;
  data: string;
  dataprev: string;
  owner: string;
  fornitore: string;

}

export interface conttatoElement {
  sel: string;
  tipologia: string;
  contratto: string;
  note: string;
  documenti: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {societa: '1', cod: 'Hydrogen', tipologia: '1.0079', sede: 'H', stato: 'H', data: 'H', dataprev: 'H', owner: 'H', fornitore: 'H'},
  {societa: '1', cod: 'Hydrogen', tipologia: '1.0079', sede: 'H', stato: 'H', data: 'H', dataprev: 'H', owner: 'H', fornitore: 'H'},
  {societa: '1', cod: 'Hydrogen', tipologia: '1.0079', sede: 'H', stato: 'H', data: 'H', dataprev: 'H', owner: 'H', fornitore: 'H'},
  {societa: '1', cod: 'Hydrogen', tipologia: '1.0079', sede: 'H', stato: 'H', data: 'H', dataprev: 'H', owner: 'H', fornitore: 'H'},
  {societa: '1', cod: 'Hydrogen', tipologia: '1.0079', sede: 'H', stato: 'H', data: 'H', dataprev: 'H', owner: 'H', fornitore: 'H'},
  {societa: '1', cod: 'Hydrogen', tipologia: '1.0079', sede: 'H', stato: 'H', data: 'H', dataprev: 'H', owner: 'H', fornitore: 'H'},
];

const conttatoElement: conttatoElement[] = [
  {sel: '', tipologia: '', contratto: '', note: '', documenti: 'contratto.pdf'},
  {sel: '', tipologia: '', contratto: '', note: '', documenti: ''},
  {sel: '', tipologia: '', contratto: '', note: '', documenti: ''},
];

@Component({
  selector: 'app-listacontrati',
  templateUrl: './listacontrati.component.html',
  styleUrls: ['./listacontrati.component.scss']
})
export class ListacontratiComponent implements OnInit {

  //@ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['societa', 'cod', 'tipologia', 'sede', 'stato', 'data', 'dataprev', 'owner', 'fornitore'];
  displayedColumns1: string[] = ['sel', 'tipologia', 'contratto', 'note', 'documenti'];
  dataSource:any=ELEMENT_DATA;
  dataSource1:any=conttatoElement;
  faCoffee = faCoffee;
  valid:boolean = false;
  fa: FormGroup;
  submitted:boolean = false;
  constructor(
    private modalService: NgbModal,
    private router:Router,
    private validationService: FormValidationService,
    private auth: AuthService,
    private serviceContrat: ContratService
    ) {
     this.fa = this.validationService.detagliocontratoForm(null,'');
    //this.paginator = ;
    //this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    //setTimeout(() => this.dataSource.paginator = this.paginator);
    //setTimeout(() => this.dataSource.sort = this.sort);
  }

  public findInvalidControls(fa:FormGroup) {
    const invalid = [];
    const controls = fa.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }

  edit() {
    console.log("form data"+JSON.stringify(this.fa.value));
    if(this.fa.valid){
      this.serviceContrat.create(this.fa.value).then(
        (data)=>{
          console.log("response"+JSON.stringify(data));
        }
      ).catch(
        (error)=>{
          console.log("error"+JSON.stringify(error));
        }
      )
      //alert('cest bon');
    } else {
      console.log("incompleted are =="+this.findInvalidControls(this.fa));
      /* alert ("pas bon"); */
    }
  }




  onChangeSelect() {
    //console.log(hello);
  }
  opensegnali() {

     this.router.navigate(['segnalazioni']);
   }

   openinterrogazioni() {
    this.router.navigate(['interrogazioni']);


   }
  public doFilter = () => {
    this.dataSource.filter = "";
  };

  async add() {
    console.log("form data"+JSON.stringify(this.fa.value));
    if(this.fa.valid){
      alert('cest bon');
    } else {
      alert ("pas bon");
    }

  }

  async openModalAdd(targetModal:any) {
     this.fa = this.validationService.detagliocontratoForm(null, '');
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
