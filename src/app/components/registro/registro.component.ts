import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
      username:['', [Validators.required, Validators.minLength(4)]],
      password:['', [Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email, Validators.minLength(10)]],
    })
  }

  ngOnInit() {}

  get Password() {
    return this.form.get("password");
  }

  get Username() {
    return this.form.get("username");
  }

  get Mail() {
    return this.form.get("email");
  }

  get UsernameValid() {
    return this.Username?.touched && !this.Username?.valid;
  }

  get PasswordValid() {
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false 
  }

  onEnviar(event: Event) {
    event.preventDefault;

    if (this.form.valid) {
      alert("Todo salio bien ¡Enviar formuario!")
    } else {
      this.form.markAllAsTouched();
    }
  }
}
