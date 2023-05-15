
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const url = "http://localhost:3000/artists";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit{
  public artists!: any;

  constructor(
    private httpClient: HttpClient
  ){}
ngOnInit(): void {
  this.httpClient
  .get( url )
  .subscribe(response => {
    this.artists = response
  });
}
}
