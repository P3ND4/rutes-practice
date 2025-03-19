import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formContact: FormGroup


  constructor(private form: FormBuilder){
    this.formContact = this.form.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }
  hasErrors(controlName: string, typeError: string){
    return this.formContact.get(controlName)?.hasError(typeError) && this.formContact.get(controlName)?.touched
  }
  enviar(){
    console.log(this.formContact)
  }
}
