import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INPUTS_DATA } from '../constants/input-data';
import { DISPLAY_COLUMN } from '../constants/table-column';
import { ComunicationService } from '../services/comunication/comunication.service';

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
  private datosInsertados: any[] = [];
  public element_data;
  @Input() set elements(elementos){
    this.element_data = [...elementos];
  }
  @Input() columns;
  @Input() title;
  @Input() inputValue ;
  @Input() idComponent;
  @Output() enviarDatos: EventEmitter<any>
  public mostrarCard = false;;
  @Input() mensajeConfirmacion;
  public mostrarMensaje: boolean = false;

  constructor(private comunicator: ComunicationService) {
    this.enviarDatos = new EventEmitter();
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
    this.element_data = [valores];
    this.mostrarMensaje = true;
    setTimeout(()=>{
      this.mostrarMensaje = false;
      this.enviarDatos.emit(this.element_data)
    },3000)
  }
}
