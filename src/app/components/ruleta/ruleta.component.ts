import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GajoComponent } from '../gajo/gajo.component';
import { PremioComponent } from '../premio/premio.component';
import { Gajo } from '../../models/gajo.model';
import { PremiosService } from '../../services/premios.service';

@Component({
  selector: 'app-ruleta',
  standalone: true,
  imports: [CommonModule, GajoComponent, PremioComponent],
  templateUrl: './ruleta.component.html',
  styleUrls: ['./ruleta.component.scss']
})
export class RuletaComponent implements OnInit {
  gajos: Gajo[] = [];
  selectorIndex: number = 0;
  girando: boolean = false;
  premioIndex: number | null = null;

  constructor(private premiosService: PremiosService) {}

  ngOnInit() {
    this.gajos = this.premiosService.getGajos();
  }

  girar() {
    if (this.girando) return;
    this.girando = true;
    this.premioIndex = null;
    const vueltas = Math.floor(Math.random() * 3) + 3;
    const target = this.premiosService.seleccionarPremio();
    const totalPasos = vueltas * this.gajos.length + target;
    let pasos = 0;

    console.log(' Iniciando giro de la ruleta...');
    
    const intervalo = setInterval(() => {
      this.selectorIndex = (this.selectorIndex + 1) % this.gajos.length;
      const gajoActual = this.gajos[this.selectorIndex];
      console.log(`Girando: ${gajoActual.titulo} - Color: ${gajoActual.color}`);
      pasos++;
      if (pasos >= totalPasos) {
        clearInterval(intervalo);
        this.premioIndex = this.selectorIndex;
        this.girando = false;
        const gajoGanador = this.gajos[this.premioIndex];
        console.log(`¡RESULTADO FINAL! - ${gajoGanador.titulo} - Color: ${gajoGanador.color} - Tipo: ${gajoGanador.tipo}`);
        if (gajoGanador.tipo === 'premio') {
          console.log('¡FELICIDADES! Has ganado un premio');
        } else {
          console.log(' Lo siento, no has ganado esta vez');
        }
      }
    }, 100);
  }
}