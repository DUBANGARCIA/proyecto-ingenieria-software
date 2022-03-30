import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MyConditionsComponent } from 'src/app/components/my-conditions/my-conditions.component';

import { PATTERNS } from '../constants/input-data';
import { ComunicationService } from '../services/comunication/comunication.service';

export interface PeriodicElement {
  identificator: number;
  name:string;
  lastname:string;
  genere: string;
  age: number;
  email: string;
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public form: FormGroup;
  @Input() inputValue: any;
  @Input() enableButtonInput: any;
  @Input() validation: any;
  @Input() data: any[];
  @Input() idC;
  @Output() enviarDatePadre : EventEmitter<object>;
  public datosTable;

  constructor(private comunicator: ComunicationService,
    public fb: FormBuilder,
    private ruta: ActivatedRoute) {
    this.enviarDatePadre = new EventEmitter();
  }

  ngOnInit(): void {
    
    console.log(this.idC);
    if (Number(this.idC) == 1) {
      this.loadInputCondition()
    }else{
      this.loadInput();
    }

    this.comunicator.enviarMenesajeObservable.subscribe(response=>{
      this.datosTable = response;
      this.settInputs()
    })
  }
  settInputs(){
   this.form.patchValue({
    name:this.datosTable.Nombres,
    lastname:this.datosTable.Apellidos,
    genere:this.datosTable.Genero,
    age:this.datosTable.Edad,
    email:this.datosTable.Correo,
    id:this.datosTable.Id,
   })
  }
  loadInputCondition(){
    this.form = this.fb.group({
      condicion:['',Validators.compose([
         Validators.required,
         Validators.pattern(PATTERNS.onlyLetters),
       ])],
       fechaD:['',Validators.compose([
        Validators.required,
      ])],
      medicina:['',Validators.compose([
        Validators.required,
        Validators.pattern(PATTERNS.onlyLetters),
      ])],
      nAplic:['',Validators.compose([
        Validators.required,
        Validators.pattern(PATTERNS.onlyNumbers),
      ])],
      textarea:['',Validators.compose([
        Validators.required,
        Validators.pattern(PATTERNS.email),
      ])],
      id:['',Validators.compose([
        Validators.required,
        Validators.pattern(PATTERNS.onlyNumbers),
      ])],
      notas:['',Validators.compose([
        Validators.required,
      ])],
    })
  }
  loadInput(){
    this.form = this.fb.group({
      name:['',Validators.compose([
         Validators.required,
         Validators.pattern(PATTERNS.onlyLetters),
       ])],
       lastname:['',Validators.compose([
        Validators.required,
        Validators.pattern(PATTERNS.onlyLetters),
      ])],
      genere:['',Validators.compose([
        Validators.required,
        Validators.pattern(PATTERNS.onlyLetters),
      ])],
      age:['',Validators.compose([
        Validators.required,
        Validators.pattern(PATTERNS.onlyNumbers),
      ])],
      email:['',Validators.compose([
        Validators.required,
        Validators.pattern(PATTERNS.email),
      ])],
      id:['',Validators.compose([
        Validators.required,
        Validators.pattern(PATTERNS.onlyNumbers),
      ])],
    })
  }
  inputValidate(formValue){
    return this.form.get(formValue).invalid && this.form.get(formValue).touched;
  }
  enable(){
    this.enableButtonInput = true;
  }
  send(){
    let valores = {
      Id: Number(this.form.get("id").value),
      Nombres: this.form.get("name").value,
      Apellidos: this.form.get("lastname").value, 
      Genero:this.form.get("genere").value, 
      Edad: Number(this.form.get("age").value), 
      Correo: this.form.get("email").value
    };
    
    this.enviarDatePadre.emit(valores);
  }

}
