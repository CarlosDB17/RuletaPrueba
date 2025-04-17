import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-premio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './premio.component.html',
  styleUrls: ['./premio.component.scss']
})
export class PremioComponent {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() icono: string = '';
  @Input() esGanador: boolean = true;
  @Input() colorGajo: string = '';
}