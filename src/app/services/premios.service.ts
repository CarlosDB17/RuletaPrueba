import { Injectable } from '@angular/core';
import { Gajo } from '../models/gajo.model';

@Injectable({ providedIn: 'root' })
export class PremiosService {
  private gajos: Gajo[] = [
    { color: '#E10A50', tipo: 'premio', titulo: '¡Enhorabuena!', descripcion: 'Has ganado unos cascos', icono: 'assets/premios/cascos.png' },
    { color: '#644682', tipo: 'premio', titulo: '¡Bien hecho!', descripcion: 'Has ganado un cupón', icono: 'assets/premios/cupon.png' },
    { color: '#F5CD00', tipo: 'prize-moment' },
    { color: '#0082C3', tipo: 'premio', titulo: '¡Sorpresa!', descripcion: 'Has ganado una botella', icono: 'assets/premios/botella.png' },
    { color: '#00AFA0', tipo: 'premio', titulo: '¡Felicidades!', descripcion: 'Has ganado una mochila', icono: 'assets/premios/mochila.png' },
    { color: '#3C3C37', tipo: 'vuelve-a-tirar' },
    { color: '#FFFFFF', tipo: 'no-toca' },
    { color: '#FF9E16', tipo: 'premio', titulo: '¡Genial!', descripcion: 'Has ganado una camiseta', icono: 'assets/premios/cascos.png' },
    { color: '#8A2BE2', tipo: 'premio', titulo: '¡Fantástico!', descripcion: 'Has ganado un vale descuento', icono: 'assets/premios/cupon.png' },
    { color: '#20B2AA', tipo: 'premio', titulo: '¡Estupendo!', descripcion: 'Has ganado una taza', icono: 'assets/premios/botella.png' },
    { color: '#FFD700', tipo: 'premio', titulo: '¡Increíble!', descripcion: 'Has ganado una gorra', icono: 'assets/premios/mochila.png' },
    { color: '#FF6347', tipo: 'premio', titulo: '¡Muy bien!', descripcion: 'Has ganado un llavero', icono: 'assets/premios/cascos.png' },
    { color: '#4682B4', tipo: 'premio', titulo: '¡Excelente!', descripcion: 'Has ganado una libreta', icono: 'assets/premios/cupon.png' },
    { color: '#32CD32', tipo: 'premio', titulo: '¡Magnífico!', descripcion: 'Has ganado un bolígrafo', icono: 'assets/premios/botella.png' },
    { color: '#FFFFFF', tipo: 'no-toca' },
    { color: '#EE82EE', tipo: 'premio', titulo: '¡Asombroso!', descripcion: 'Has ganado una pulsera', icono: 'assets/premios/mochila.png' },
  ];

  getGajos(): Gajo[] {
    return [...this.gajos];
  }

  seleccionarPremio(): number {
    return Math.floor(Math.random() * this.gajos.length);
  }
}