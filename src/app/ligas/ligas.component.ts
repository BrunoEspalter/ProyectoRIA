import { Component, OnInit } from '@angular/core';
import axios from 'axios';



@Component({
  selector: 'app-ligas',
  templateUrl: './ligas.component.html',
  styleUrls: [ './ligas.component.css' ]
})
export class LigasComponent implements OnInit {
  

  leagues: any[] = [];

  ngOnInit() {
    this.getData();
  }

  getData() {
    const apiUrl = 'https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=12e79df20c18bc08d9813167a58ba65206514ff57687bb63f3888fcd697b2fb2'; // Reemplaza con tu URL de API

    axios.get(apiUrl)
      .then(response => {
        this.leagues = response.data.result;
        console.log('Data fetched successfully:', this.leagues);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    
  }
}
