import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  api_url: string;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(config: ConfigService, private httpClient: HttpClient) {
    this.api_url = config.API_URL;
  }

  async create(data:any): Promise<any> {
    data.id_user = localStorage.getItem("idUser");
    console.log("data before sending "+ JSON.stringify(data));
    const url = `${this.api_url}/auth/contrat/create`;
    const res = await this.httpClient.post(url, data).toPromise();
    return res;
  }
}
