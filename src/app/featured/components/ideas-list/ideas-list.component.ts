import { Component, OnInit } from '@angular/core';
import { RegistrationDataService } from '../../../idea-service.service';


@Component({
  selector: 'app-ideas-list',
  templateUrl: './ideas-list.component.html',
  styleUrls: ['./ideas-list.component.scss']
})
export class IdeasListComponent implements OnInit {
  registrationData: any[] = [];
  constructor(private registrationDataService: RegistrationDataService) { }

  ngOnInit(): void {
    this.registrationData = this.registrationDataService.getRegistrationData();
  }
}
