import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gajo } from '../../models/gajo.model';

@Component({
  selector: 'app-gajo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gajo.component.html',
  styleUrls: ['./gajo.component.scss']
})
export class GajoComponent {
  @Input() gajo!: Gajo;
  @Input() selected: boolean = false;
  @Input() tamano: number = 150;

  calcAltura(tamano: number): number {
    return tamano / 0.3;
  }
}