import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  
  anchoPagina: number = document.body.clientWidth;

  constructor() { }


  ngAfterViewInit() {
    // Obtener el ancho de la página al cargar el componente
      this.calcularAnchoPagina();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    // Actualizar el ancho de la página cuando se redimensiona la ventana
    this.calcularAnchoPagina();
  }

  calcularAnchoPagina() {
    // Obtener el ancho del cuerpo (puede ajustarse según tu estructura HTML)
    this.anchoPagina = document.body.clientWidth;
    return this.anchoPagina; 
  }


  goToWhatsapp(): void {
    const url = 'https://api.whatsapp.com/send?phone=56996298044&text=Hola%2C%20quiero%20agendar%20una%20hora%20con%20la%20Dra%20Luz%20Duhalde';
    window.open(url, '_blank');  // Abre enlace en nueva pestaña
  }

  goToInstragram(): void {
    const url = 'https://www.instagram.com/dra.luzduhalde/';
    window.open(url, '_blank');  // Abre enlace en nueva pestaña
  }

  goToDentalink(): void {
    const url = 'https://ff.healthatom.io/2WFxZm';
    window.open(url, '_blank');  // Abre enlace en nueva pestaña
  }
}
