import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  @Input() myDataArray: any[] = []
  @Input() dataColumn: any[] = [];
  public dataSource: any[] = [{Id:2, Nombres: "Ds"}];
  public displayedColumns: any[] = [];
  public datosEditar;
  public selected: boolean = false;


  constructor(private comunicator: ComunicationService) { 
    
  }

  ngOnInit(): void {
    this.dataSource = this.myDataArray;
    this.displayedColumns = this.dataColumn;
  }
  
  clickedRows = new Set<PeriodicElement>();
  
  
  edit(row){
    this.selected = true;
    this.comunicator.enviarMensaje(row);
  }
}
 