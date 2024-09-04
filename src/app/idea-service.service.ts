import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistrationDataService {
  private registrationData: any[] = [];

  getRegistrationData() {
    return this.registrationData;
  }

  addRegistrationData(data: any) {
    this.registrationData.push(data);
  }
}