import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { INPUTS_DATA } from 'src/app/shared/constants/input-data';
import { DISPLAY_COLUMN } from 'src/app/shared/constants/table-column';
import { MyBeneficiariesService } from 'src/app/shared/services/my-beneficiaries/my-beneficiaries.service';

@Component({
  selector: 'app-my-beneficiaries',
  templateUrl: './my-beneficiaries.component.html',
  styleUrls: ['./my-beneficiaries.component.css']
})
export class MyBeneficiariesComponent implements OnInit {
  public element_data: any[] = [];
  public columns = DISPLAY_COLUMN;
  public title = "Registrar beneficiarios";
  public inputValue = INPUTS_DATA;
  public idComponent;
  public mensajeConfirmacion = "";
  public mostrarMensaje: boolean = false;

  constructor(private ruta: ActivatedRoute,
    private beneficiaries: MyBeneficiariesService) { 
      this.load();
    }

  ngOnInit(): void {
    this.idComponent = this.ruta.snapshot.paramMap.get("id");
  }

  load(){
    let token = localStorage.getItem("token")
    this.beneficiaries.getBeneficiaries(token).pipe(
      finalize(() => {
        // this.mostrarSpiner = false;
      })).subscribe(response => {
      // @ts-ignore
        this.element_data = [...response.data];
        // console.log(this.element_data);
      }, (error: HttpErrorResponse) => {
        console.log(error)
      });
  }
  recibirDatos(valores) {
    let valoresAEnviar = {
      beneficiaryId: valores[0].Id,
      first_name: valores[0].Nombres,
      last_name: valores[0].Apellidos,
      gender: valores[0].Genero,
      age: valores[0].Edad,
      email: valores[0].Correo
    }
    setTimeout(() => {
      let token = localStorage.getItem("token")
      this.beneficiaries.setBeneficiaries(valoresAEnviar, token).pipe(
        finalize(() => {
          // this.mostrarSpiner = false;
        })).subscribe((response) => {
            this.mostrarMensaje = true;
            this.mensajeConfirmacion = "Datos Registrados."
          console.log(response);
        }, (error: HttpErrorResponse) => {
          console.log(error)
        });
    }, 3000);
    // location.reload();
    console.log(valoresAEnviar);
  }

}
