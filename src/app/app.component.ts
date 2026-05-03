import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'firstProject';
  cars: any = ['BMW', 'Audi', new Date(), 'Toyota', true, 10, 'Chevrolet', 'Nissan', 'Volkswagen', 'Hyundai'];
}
