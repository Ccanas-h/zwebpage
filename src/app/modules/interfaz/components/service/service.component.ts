import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { AppserviceService } from '../../services/appservice.service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

  serv = inject(AppserviceService);

}
