import { Injectable } from '@angular/core';
import { Gajo } from '../models/gajo.model';

@Injectable({ providedIn: 'root' })
export class PremiosService {
  private gajos: Gajo[] = [
    { color: '#E10A50', borderColor: '#E10A50', tipo: 'premio', titulo: 'Titulo 1', descripcion: 'Descripcion 1', icono: 'assets/premios/cascos.png' },
    { color: '#644682', borderColor: '#644682', tipo: 'premio', titulo: 'Titulo 2', descripcion: 'Descripcion 2', icono: 'assets/premios/cupon.png' },
    { color: '#F5CD00', borderColor: '#F5CD00', tipo: 'premio', titulo: 'Titulo 3', descripcion: 'Descripcion 3', icono: 'assets/premios/botella.png' },
    { color: '#0082C3', borderColor: '#0082C3', tipo: 'premio', titulo: 'Titulo 4', descripcion: 'Descripcion 4', icono: 'assets/premios/mochila.png' },
    { color: '#00AFA0', borderColor: '#00AFA0', tipo: 'premio', titulo: 'Titulo 5', descripcion: 'Descripcion 5', icono: 'assets/premios/cascos.png' },
    { color: '#3C3C37', borderColor: '#3C3C37', tipo: 'vuelve-a-tirar' },
    { color: '#FFFFFF', borderColor: '#3C3C37', tipo: 'no-toca' },
    { color: '#B99B1E', borderColor: '#B99B1E', tipo: 'prize-moment' },
    { color: '#E10A50', borderColor: '#E10A50', tipo: 'premio', titulo: 'Titulo 6', descripcion: 'Descripcion 6', icono: 'assets/premios/cascos.png' },
    { color: '#644682', borderColor: '#644682', tipo: 'premio', titulo: 'Titulo 7', descripcion: 'Descripcion 7', icono: 'assets/premios/cupon.png' },
    { color: '#F5CD00', borderColor: '#F5CD00', tipo: 'premio', titulo: 'Titulo 8', descripcion: 'Descripcion 8', icono: 'assets/premios/botella.png' },
    { color: '#0082C3', borderColor: '#0082C3', tipo: 'premio', titulo: 'Titulo 9', descripcion: 'Descripcion 9', icono: 'assets/premios/mochila.png' },
    { color: '#00AFA0', borderColor: '#00AFA0', tipo: 'premio', titulo: 'Titulo 10', descripcion: 'Descripcion 10', icono: 'assets/premios/cascos.png' },
    { color: '#FFFFFF', borderColor: '#3C3C37', tipo: 'no-toca' },
    { color: '#E10A50', borderColor: '#E10A50', tipo: 'premio', titulo: 'Titulo 11', descripcion: 'Descripcion 11', icono: 'assets/premios/cascos.png' },
    { color: '#644682', borderColor: '#644682', tipo: 'premio', titulo: 'Titulo 12', descripcion: 'Descripcion 12', icono: 'assets/premios/cupon.png' },
  ];

  getGajos(): Gajo[] {
    return [...this.gajos];
  }

  seleccionarPremio(): number {
    return Math.floor(Math.random() * this.gajos.length);
  }
}