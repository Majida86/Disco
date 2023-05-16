import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit{

  titreAlbum!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
   
  }
  onSubmitForm(form: NgForm) {
  console.log(form.value);
  }


}
