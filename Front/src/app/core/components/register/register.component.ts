import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { PATTERNS } from 'src/app/shared/constants/input-data';
import { peticion, SaveDataService } from 'src/app/shared/services/save/save-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public mostrarMensaje: boolean = false;
  public form: FormGroup;
  public menssage: string = "";
  public mostrarSpiner = false;
  
  constructor(public fb: FormBuilder, private router: Router, private save: SaveDataService) { }
 
  ngOnInit(): void {
    this.loadInput();
  }
  registrar() {
    if (this.form.invalid == false) {
      this.mostrarMensaje = false;
      let valoresRegister: peticion = {
        first_name: this.form.get("name").value,
        password: this.form.get("pass").value,
        last_name: this.form.get("lastname").value,
        gender: this.form.get("genere").value,
        age: this.form.get("age").value,
        email: this.form.get("email").value 
      }
      this.mostrarSpiner = true;
      setTimeout(()=>{
        this.save.registrarUser(valoresRegister).pipe(
          finalize(()=>{
            this.mostrarSpiner = false;
          })).subscribe((response)=>{
            this.menssage = "Se registraron los datos correctamente."
            this.mostrarMensaje = true;
            console.log(response);
          }, (error:HttpErrorResponse)=>{
            this.menssage = "Ups! ocurrio un error, no pudimos almacenar tu información"
            this.mostrarMensaje = true;
            console.log(error)
          });
      },3000);
    } else {
      this.menssage = "Ups! tienes algún valor incorrecto, valide la información registrada"
      this.mostrarMensaje = true;
    }
  }
  loadInput() {
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.required,
      ])],
      pass: ['', Validators.compose([
        Validators.required,
      ])],
      lastname: ['', Validators.compose([
        Validators.required,
        Validators.pattern(PATTERNS.onlyLetters),
      ])],
      genere: ['', Validators.compose([
        Validators.required,
        Validators.pattern(PATTERNS.onlyLetters),
      ])],
      age: ['', Validators.compose([
        Validators.required,
        Validators.pattern(PATTERNS.onlyNumbers),
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern(PATTERNS.email),
      ])],
    })
  }
  irTo() {
    this.router.navigate(['/login']);
  }

}
