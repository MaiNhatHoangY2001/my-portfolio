import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './pages/home/home.component';
import { ThemeService } from './services/theme.service';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '3d-showcase';
  constructor(
    translationService: TranslationService,
    private themService: ThemeService,
  ) {
    translationService.initLanguage();
  }

  get isDarkTheme() {
    return this.themService.getTheme();
  }
}
