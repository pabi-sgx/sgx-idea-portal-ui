import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationDataService } from '../../../idea-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  // standalone: true,
  // imports: [],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private registrationDataService: RegistrationDataService, private router: Router) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      employeeId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      title: ['', Validators.required],
      email: ['', [Validators.required]],
    });
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      this.registrationDataService.addRegistrationData(this.registrationForm.value);
      console.log('Registration data submitted:', this.registrationForm.value);
      this.registrationForm.reset();
      this.router.navigate(['/ideas-list']);
    } else {
      console.log('Form is invalid');
    }
  }

}
