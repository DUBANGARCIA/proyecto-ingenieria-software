import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  mensajeEnviado:any;
  mensajeRecibido:any;

  private enviarMensajeSubject = new Subject();
  enviarMenesajeObservable = this.enviarMensajeSubject.asObservable();

  private recibirMensajeSubject = new Subject();
  recibirMenesajeObservable = this.recibirMensajeSubject.asObservable();

  enviarMensaje(datos:any){
    this.mensajeEnviado = datos;
    this.enviarMensajeSubject.next(datos);
  }
  recibirMensaje(datos: any){
    this.mensajeRecibido = datos;
    this.recibirMensajeSubject.next(datos);
  }
}
