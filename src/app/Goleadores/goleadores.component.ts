import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-goleadores',
  templateUrl: './goleadores.component.html',
  styleUrls: [ './goleadores.component.css' ]
})

export class GoleadoresComponent implements OnInit {
  leagueId: string | null = null;
  goleadores: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.leagueId = '3'
      this.getData();
    });
  }

  getData() {
    const apiUrl = `https://apiv2.allsportsapi.com/football/?&met=Topscorers&leagueId=${this.leagueId}&APIkey=12e79df20c18bc08d9813167a58ba65206514ff57687bb63f3888fcd697b2fb2`;
    
    axios.get(apiUrl)
      .then(response => {
        this.goleadores = response.data.result;
        console.log('Data fetched successfully:', this.goleadores);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
}
