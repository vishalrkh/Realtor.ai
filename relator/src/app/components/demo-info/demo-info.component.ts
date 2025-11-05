import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpeechAiService } from '../../services/speech-ai.service';

@Component({
  selector: 'app-demo-info',
  templateUrl: './demo-info.component.html'
})
export class DemoInfoComponent {
  demoForm: FormGroup;
  loading = false;
  serviceTypes = ['Rent', 'Buy', 'Lease'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private speechAi: SpeechAiService
  ) {
    this.demoForm = this.fb.group({
      name: ['', Validators.required],
      contact: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      occupation: ['', Validators.required],
      familySize: ['', Validators.required],
      serviceType: ['', Validators.required],
      preferences: ['', Validators.required],
      comments: ['', Validators.required]
    });
  }

  nextPage() {
    if (this.demoForm.valid) {
      sessionStorage.setItem('demoInfo', JSON.stringify(this.demoForm.value));
      this.router.navigate(['/requirements']);
    }
  }

  async doSpeechPrefill() { /* unchanged */ }
}