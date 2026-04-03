import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './user-profile/user-profile';

@Component({
  selector: 'app-root', // Se io voglio inserire questo componente in un altro basta usare {app-root}
  imports: [RouterOutlet, UserProfile], // questi sono i componenti importati, all'interno di te stesso importa questo comportamento che abbiamo definito
  templateUrl: './app.html', // questo è l'html da caricare sul componente
  styleUrl: './app.scss'
  // standole: true; ogni componente diventa in maniera assestante
})
export class App {
  protected readonly title = signal('web_mobile'); // questo ci permette di concatenare frontend e backend
}
