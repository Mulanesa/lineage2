import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form: FormGroup;
  form2: FormGroup;
  form3: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
      username:['', [Validators.required, Validators.minLength(4)]],
      password:['', [Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email, Validators.minLength(10)]],
    })
    this.form2= this.formBuilder.group({
      email:['', [Validators.required, Validators.email, Validators.minLength(10)]],
    })
    this.form3= this.formBuilder.group({
      username:['', [Validators.required, Validators.minLength(4)]],
      password:['', [Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email, Validators.minLength(10)]],
    })
  }

  ngOnInit() {}

    // Form | 1

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

// ************************************************************

  // Form | 2

  get Mail2() {
    return this.form2.get("email");
  }

  get Mail2Valid() {
    return false 
  }

// ************************************************************

  // Form | 3

  get Password3() {
    return this.form3.get("password");
  }

  get Username3() {
    return this.form3.get("username");
  }

  get Mail3() {
    return this.form3.get("email");
  }

  get UsernameValid3() {
    return this.Username?.touched && !this.Username?.valid;
  }

  get PasswordValid3() {
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid3() {
    return false 
  }

// ************************************************************

  onEnviar(event: Event) { // Form | 1
    event.preventDefault;

    if (this.form.valid) {
      alert("Todo salio bien ¡Enviar formuario!")
    } else {
      this.form.markAllAsTouched();
    }
  }

  onEnviarF2(event: Event) { // Form | 2
    event.preventDefault;

    if (this.form2.valid) {
      alert("Todo salio bien ¡Enviar formuario!")
    } else {
      this.form2.markAllAsTouched();
    }
  }

  onEnviarF3(event: Event) { // Form | 3
    event.preventDefault;

    if (this.form3.valid) {
      alert("Todo salio bien ¡Enviar formuario!")
    } else {
      this.form3.markAllAsTouched();
    }
  }
}
