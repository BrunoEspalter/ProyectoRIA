import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: [ './novedades.component.css' ]
})

export class NovedadesComponent implements OnInit {
  noticias: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      
    this.getData();

  }

  getData() {
    const apiUrl = 'https://www.scorebat.com/video-api/v3/feed/?token=ODUwNjFfMTY4NDAxNjE1MF80MzBlMTFmYmJkNDE0YzRjNWEyZjJmNzI3NzM5MTIxZWFjZjcwNjcw';
    axios.get(apiUrl)
      .then(response => {
        this.noticias = response.data.response;
        console.log('Data fetched successfully:', this.noticias);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
}
