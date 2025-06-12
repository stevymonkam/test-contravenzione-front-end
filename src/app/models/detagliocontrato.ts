export class Detagliocontrato {

  owner: string;
  sede: string;
  azienda: string;
  id_user: Number;
  codice: string;
  tipo_importo: string;
  fornitore: string;
  iva: string;
  lop_cliente: string;
  tipologia_contratto: string;
  stato_contratto: string;
  data_validata: Date;
  rinnovo_automatico: Number;
  data_disdetta: string;
  note: string;
  mail_preavviso: Number;
  mail_contratto: Number;
  data_rinnovo: Date;
  periodo: string;
  preavviso: string;
  data_scandenza:Date;
  
  constructor(
    owner: string,
    sede: string,
    azienda: string,
    id_user: Number,
    codice: string,
    tipo_importo: string,
    fornitore: string,
    iva: string,
    lop_cliente: string,
    tipologia_contratto: string,
    stato_contratto: string,
    data_validata: Date,
    rinnovo_automatico: Number,
    data_disdetta: string,
    note: string,
    mail_preavviso: Number,
    mail_contratto: Number,
    data_rinnovo: Date,
    periodo: string,
    preavviso: string,
    data_scandenza:Date,
  ) {

    this.owner = owner;
    this.sede = sede;
    this.azienda = azienda;
    this.id_user = id_user;
    this.codice = codice;
    this.tipo_importo = tipo_importo;
    this.fornitore = fornitore;
    this.iva = iva;
    this.lop_cliente = lop_cliente;
    this.tipologia_contratto = tipologia_contratto;
    this.stato_contratto = stato_contratto;
    this.data_validata = data_validata;
    this.rinnovo_automatico = rinnovo_automatico;
    this.data_disdetta = data_disdetta;
    this.note = note;
    this.mail_preavviso = mail_preavviso;
    this.mail_contratto = mail_contratto;
    this.data_rinnovo = data_rinnovo;
    this.periodo = periodo;
    this.preavviso = preavviso;
    this.data_scandenza = data_scandenza;
  }
}
