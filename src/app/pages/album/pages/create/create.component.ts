import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit{

  albumForm!: FormGroup;

  constructor( private formBuilder: FormBuilder) { }
  ngOnInit(): void {
  this.albumForm = this.formBuilder.group({
    title: [null],
    adresseId: [null],
  });
  }

onSubmitForm(): void {
  console.log(this.albumForm.value);
}


}
