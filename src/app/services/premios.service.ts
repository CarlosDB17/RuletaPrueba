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
    // ... completar según configuración del admin
  ];

  getGajos(): Gajo[] {
    return [...this.gajos];
  }

  seleccionarPremio(): number {
    return Math.floor(Math.random() * this.gajos.length);
  }
}