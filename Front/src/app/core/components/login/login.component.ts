import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { PATTERNS } from 'src/app/shared/constants/input-data';
import { LoginService } from 'src/app/shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public mostrarMensaje = false;
  public mostrarSpiner = false;
  public menssage: string = "";

  constructor(public fb: FormBuilder,
    private login: LoginService,
    private router: Router) {}

  ngOnInit(): void {
    this.loadInput();
    localStorage.clear();
  }
  loadInput(){
    this.form = this.fb.group({
      user:['',Validators.compose([
         Validators.required,
       ])],
       pass:['',Validators.compose([
        Validators.required,
      ])],
  })
}

  ingresar(){
    if (this.form.invalid == false) {
      this.mostrarMensaje = false;
      this.mostrarSpiner = true;
      let users = {
        username : this.form.get("user").value,
        password :this.form.get("pass").value
      }
      setTimeout(()=>{
        this.login.valideUser(users).pipe(
          finalize(()=>{
            this.mostrarSpiner = false;
          })).subscribe((response)=>{
            this.router.navigate(['mybeneficiaries', '0']);
          // @ts-ignore
            localStorage.setItem("token", response.data.token)
            console.log(response);
          }, (error:HttpErrorResponse)=>{
            this.menssage = "Ups! ocurrio un error, no pudimos procesar tu información"
            this.mostrarMensaje = true;
            console.log(error)
          });
      },3000);
    }else{
      this.menssage = "Ups! tienes algún valor incorrecto, valide la información ingresada"
      this.mostrarMensaje = true;
    }
  }
  irTo() {
    this.router.navigate(['/register']);
  }
}
