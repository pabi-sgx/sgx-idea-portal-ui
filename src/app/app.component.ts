import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiServiceService } from './core/api-service.service';
import { SpinnerComponent } from "./shared/components/spinner/spinner.component";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from "./shared/components/header/header.component";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
// import { AuthInterceptor } from './core/interceptors/auth.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SpinnerComponent, HeaderComponent, SidebarComponent, FooterComponent],
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sgx-idea-portal-ui';

  constructor(private _apiService: ApiServiceService) {
    _apiService.get('todos/1').subscribe(res => {
      console.log(res);
      
    })
  }
}
