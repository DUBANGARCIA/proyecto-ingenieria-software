import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INPUTS_DATA } from '../constants/input-data';
import { DISPLAY_COLUMN } from '../constants/table-column';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  public cards: any[] = [{
    title: "J",
    name:"d",
    lastname: "s",
    genere: "s",
    age: 2,
    email: "cdc@n.com",
  }]; 
  public ocultar: boolean = false;
  public enableButtonInput: boolean = false;
  private bodyAccordion: any = "";
  public titleAccordion : string = "";
  public validation: boolean = false;
  public imgFlecha: string = "./assets/img/right-arrow.png"; 
  public mostrarBodyAcco: boolean = false;
  private datosInsertados: any;
  @Input() element_data: any[];
  @Input() columns;
  @Input() title;
  @Input() inputValue ;
  @Input() idComponent;

  public mostrarCard;
 
  

  constructor() {
  }

  ngOnInit(): void {
    
  }
  desplegar(){
    this.bodyAccordion = document.getElementById("accordion-body");
    if (this.mostrarBodyAcco == false
    ) {
      this.mostrarBodyAcco = true;
      this.imgFlecha = "./assets/img/right-arrow (1).png";
    }else{
      this.mostrarBodyAcco = false;
      this.imgFlecha = "./assets/img/right-arrow.png";
    }
  }
  enable(){
    this.enableButtonInput = true;
  }
  ocultarIn(valor: any){
    this.bodyAccordion = document.getElementById("tittle");
    if(valor.value != ""){
      this.ocultar = true;
      this.titleAccordion = valor.value;
      this.enableButtonInput = true;
    }else{
      this.validation = true;
      this.bodyAccordion.style.borderBottom = ".1rem solid red"
    }
  }
  add(){
    this.mostrarCard = true;
  }
  recibirDatos(valores){
    this.datosInsertados = valores;
    this.element_data.push(valores);
    console.log(this.element_data);
  }
}
