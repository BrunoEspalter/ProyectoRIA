import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FutbolService {

  private apiUrl = 'https://apiv2.allsportsapi.com/football/?met=';
  private apiKey = 'APIkey=12e79df20c18bc08d9813167a58ba65206514ff57687bb63f3888fcd697b2fb2&';

  constructor(private http: HttpClient) { }


  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public obtenerPartidosTrivia(): Observable<any[]> {

    const primerEquipoId = this.getRandomNumber(72, 97);
    const segundoEquipoId = this.getRandomNumber(72, 97);

    return this.http.get<any[]>(this.apiUrl+'H2H&'+this.apiKey+`firstTeamId=${primerEquipoId}&`+`secondTeamId=${segundoEquipoId}&`);
  }
}
