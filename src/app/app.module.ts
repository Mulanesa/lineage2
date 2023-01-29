import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { StreamsComponent } from './components/streams/streams.component';
import { InfoComponent } from './components/info/info.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ContactComponent } from './components/contact/contact.component';
import { FilesComponent } from './components/files/files.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DonacionesComponent,
    StreamsComponent,
    InfoComponent,
    InicioComponent,
    FooterComponent,
    RegistroComponent,
    ContactComponent,
    FilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
