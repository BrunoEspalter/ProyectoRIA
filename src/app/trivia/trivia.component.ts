import { Component } from '@angular/core';
import { FutbolService } from '../services/futbol.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrl: './trivia.component.css'
})
export class TriviaComponent {

 
  constructor(private servicio: FutbolService) { }


  partidos: any[] = [];
  correcto:boolean=false
  incorrecto:boolean=false
  resultado:any=null;
  homeRes:number=0
  awayRes:number=0



  solicitarTrivia(){

    this.servicio.obtenerPartidosTrivia().subscribe(
      (data: any[]) => {
        this.partidos=[]
        this.partidos = [data];
        this.resultado=null
        this.correcto=false
        this.incorrecto=false
      },
      error => {
        console.error('Ha ocurrido un error!', error);
      }
    );
  }

  enviarResultado(){
    this.resultado=`${this.homeRes} - ${this.awayRes}`

    if(this.resultado==this.partidos[0].result.firstTeamResults[0].event_final_result){
      this.correcto=true
      this.incorrecto=false
    }else{
    this.incorrecto=true
    this.correcto=false
    }
  }
}
