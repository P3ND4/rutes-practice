import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  formContact: FormGroup
  currentUser: string = "Perdro"

  constructor(private form: FormBuilder){
    this.formContact = this.form.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }
  ngOnInit(): void {
    this.formContact.valueChanges.subscribe(valor => {
      console.log(valor)
    })
  }

  hasErrors(controlName: string, typeError: string){
    return this.formContact.get(controlName)?.hasError(typeError) && this.formContact.get(controlName)?.touched
  }
  enviar(){
    console.log(this.formContact)
  }
}
