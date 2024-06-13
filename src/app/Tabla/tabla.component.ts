import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: [ './tabla.component.css' ]
})

export class TablaComponent implements OnInit {
  leagueId: string | null = null;
  clasificacion: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.leagueId = params.get('id'); 
      console.log(`${this.leagueId}`);
      this.getData();
    });
  }

  getData() {
    const apiUrl = `https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=${this.leagueId}&APIkey=12e79df20c18bc08d9813167a58ba65206514ff57687bb63f3888fcd697b2fb2`;

    axios.get(apiUrl)
      .then(response => {
        this.clasificacion = response.data.result.total;
        console.log('Data fetched successfully:', this.clasificacion);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
}
