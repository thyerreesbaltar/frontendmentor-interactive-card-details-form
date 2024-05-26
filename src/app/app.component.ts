import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PagesModule, FormsModule],
  template: `<router-outlet />`,
})
export class AppComponent {
  title = 'interactive-card-details';
}
