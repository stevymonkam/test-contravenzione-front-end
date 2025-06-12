import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class FormValidationService {


  constructor( private formBuilder: FormBuilder) { }

  detagliocontratoForm(detagliocontrato: any, status: any) {
    if (status == "edit") {
      console.log(JSON.stringify(detagliocontrato));
      let formEdit: FormGroup = this.formBuilder.group({
        owner:[detagliocontrato.owner, Validators.required],
        sede: [detagliocontrato.sede, Validators.required],
        azienda: [detagliocontrato.azienda, Validators.required],
        id_user: [localStorage.getItem("idUser"), Validators.required],
        codice: [detagliocontrato.codice, Validators.required],
        tipo_importo: [detagliocontrato.tipo_importo, Validators.required],
        fornitore: [detagliocontrato.fornitore, Validators.required],
        iva: [detagliocontrato.iva, Validators.required],
        lop_cliente: [detagliocontrato.lop_cliente, Validators.required],
        tipologia_contratto: [detagliocontrato.tipologia_contratto, Validators.required],
        stato_contratto: [detagliocontrato.owner, Validators.required],
        data_validata: [detagliocontrato.data_validata, Validators.required],
        rinnovo_automatico: [detagliocontrato.rinnovo_automatico, Validators.required],
        data_disdetta: [detagliocontrato.data_disdetta, Validators.required],
        note: [detagliocontrato.note, Validators.required],
        mail_preavviso: [detagliocontrato.mail_preavviso, Validators.required],
        mail_contratto: [detagliocontrato.mail_contratto, Validators.required],
        data_rinnovo: [detagliocontrato.data_rinnovo, Validators.required],
        periodo:[detagliocontrato.periodo, Validators.required],
        preavviso:[detagliocontrato.preavviso, Validators.required],
        data_scadenza:[detagliocontrato.data_scandenza, Validators.required],
      });
      return formEdit;
    } else {
      let formAdd: FormGroup = this.formBuilder.group({
        owner:['', Validators.required],
        sede: ['', Validators.required],
        azienda: ['', Validators.required],
        id_user: [localStorage.getItem("idUser"), Validators.required],
        codice: ['', Validators.required],
        tipo_importo: ['', Validators.required],
        fornitore: ['', Validators.required],
        iva: ['', Validators.required],
        lop_cliente: ['', Validators.required],
        tipologia_contratto: ['', Validators.required],
        stato_contratto: ['', Validators.required],
        data_validata: ['', Validators.required],
        rinnovo_automatico: ['', Validators.required],
        data_disdetta: ['', Validators.required],
        note: ['', Validators.required],
        mail_preavviso: ['', Validators.required],
        mail_contratto: ['', Validators.required],
        data_rinnovo: ['', Validators.required],
        periodo: ['', Validators.required],
        preavviso: ['', Validators.required],
        data_scadenza:['', Validators.required],
      });
      return formAdd;
    }
  }
}
