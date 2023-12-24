import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor() { }



  goToWhatsapp(): void {
    const url = 'https://api.whatsapp.com/send?phone=56996298044&text=Hola%2C%20quiero%20agendar%20una%20hora%20con%20la%20Dra%20Luz%20Duhalde';
    window.open(url, '_blank');  // Abre enlace en nueva pestaña
  }

  goToInstragram(): void {
    const url = 'https://www.instagram.com/dra.luzduhalde/';
    window.open(url, '_blank');  // Abre enlace en nueva pestaña
  }

}
