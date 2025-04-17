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

    const intervalo = setInterval(() => {
      this.selectorIndex = (this.selectorIndex + 1) % this.gajos.length;
      pasos++;
      if (pasos >= totalPasos) {
        clearInterval(intervalo);
        this.premioIndex = this.selectorIndex;
        this.girando = false;
      }
    }, 100);
  }
}