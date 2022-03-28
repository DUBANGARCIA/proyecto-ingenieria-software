import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { INPUTS_CONDITION, INPUTS_DATA, PATTERNS } from 'src/app/shared/constants/input-data';
import { DISPLAY_COLUMN_CONDITION } from 'src/app/shared/constants/table-column';

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

  constructor(public fb: FormBuilder,
    private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.idComponent = this.ruta.snapshot.paramMap.get("id");
  }
  

}
 