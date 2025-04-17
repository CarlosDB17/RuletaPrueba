import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RuletaComponent } from './components/ruleta/ruleta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RuletaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RuletaPrueba';
}
