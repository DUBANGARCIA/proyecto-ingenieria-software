import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { INPUTS_CONDITION, INPUTS_DATA, PATTERNS } from 'src/app/shared/constants/input-data';
import { DISPLAY_COLUMN_CONDITION } from 'src/app/shared/constants/table-column';
import { MyConditionService } from 'src/app/shared/services/my-condition/my-condition.service';

@Component({
  selector: 'app-my-conditions',
  templateUrl: './my-conditions.component.html',
  styleUrls: ['./my-conditions.component.css']
})
export class MyConditionsComponent implements OnInit {
  public element_data: any[] = [];
  public columns = DISPLAY_COLUMN_CONDITION;
  public title = "Registrar condiciones de Salud";
  public inputValue = INPUTS_CONDITION;
  public form: FormGroup;
  public idComponent;
  public foods;
  public mostrarTable: boolean = false;
  public mensajeConfirmacion = "";
  public mostrarMensaje: boolean = false;


  constructor(public fb: FormBuilder,
    private ruta: ActivatedRoute,
    private conditionService: MyConditionService) { 
      this.foods = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'},
      ];
    }
 
  ngOnInit(): void {
    this.idComponent = this.ruta.snapshot.paramMap.get("id");
   
  }
  consultarCondicion(idBeneficiario){
    setTimeout(()=>{
      this.conditionService.getMyCondition(idBeneficiario).pipe(
        finalize(()=>{
          // this.mostrarSpiner = false;
        })).subscribe((response)=>{
          console.log(response);
        }, (error:HttpErrorResponse)=>{
          console.log(error)
        });
    },3000);
  }
  select(valores){
    // this.consultarCondicion(valores);
    this.element_data = [{
      id: 3,
      Condicion: "WECD",
      Fecha: "2022-04-01",
      Medicamentos: "df",
      aplicaciones: 43,Notas: "df"
    }];
    this.mostrarTable = true;
    console.log(valores.value);
  }
  recibirDatos(valores){
    let valoresAEnviar = {
      beneficiaryId: valores[0].id,
      condicion: valores[0].condicion,
      fechaD: valores[0].fechaD,
      medicamentos: valores[0].medicamentos,
      nAplicacion: valores[0].nAplicacion,
      notas: valores[0].notas
    }
    // setTimeout(() => {
    //   this.beneficiaries.setBeneficiaries(valores[0]).pipe(
    //     finalize(() => {
    //       // this.mostrarSpiner = false;
    //     })).subscribe((response) => {
    //         this.mostrarMensaje = true;
    //         this.mensaje = "Datos Registrados."
    //       console.log(response);
    //     }, (error: HttpErrorResponse) => {
    //       console.log(error)
    //     });
    // }, 3000);
    // location.reload();
    console.log(valoresAEnviar);
  }
}
 