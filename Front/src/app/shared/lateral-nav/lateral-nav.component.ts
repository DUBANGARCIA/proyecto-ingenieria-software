import { Component, OnInit } from '@angular/core';
import { LATERAL_NAV } from 'src/app/core/Constantes';

@Component({
  selector: 'app-lateral-nav',
  templateUrl: './lateral-nav.component.html',
  styleUrls: ['./lateral-nav.component.css']
})
export class LateralNavComponent implements OnInit {

  public optionsNav: any[] = LATERAL_NAV;

  constructor() { }

  ngOnInit(): void {
  }

} 
