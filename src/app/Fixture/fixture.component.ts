import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: [ './fixture.component.css' ]
})

export class FixtureComponent implements OnInit {
  partidos: any[] = [];
  leagueId: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.leagueId = params.get('id'); 
      console.log(`${this.leagueId}`);
      this.getData();
    });
  }

  getData() {
    const mañana = new Date();
    mañana.setDate(mañana.getDate() + 1);
    const semenaFutura = new Date();
    semenaFutura.setDate(mañana.getDate() + 7);

    const formatDate = (date: Date) => date.toISOString().split('T')[0];

    const fromDate = formatDate(mañana);
    const toDate = formatDate(semenaFutura);

    const apiUrl = `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=12e79df20c18bc08d9813167a58ba65206514ff57687bb63f3888fcd697b2fb2&from=${fromDate}&to=${toDate}&leagueId=${this.leagueId}`;


    axios.get(apiUrl)
      .then(response => {
        this.partidos = response.data.result;
        console.log('Data fetched successfully:', this.partidos);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
}
