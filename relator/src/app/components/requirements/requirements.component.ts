import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpeechAiService } from '../../services/speech-ai.service';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html'
})
export class RequirementsComponent {
  reqForm: FormGroup;
  areas = ['Downtown', 'Suburbs', 'Rural'];
  propertyTypes = ['Apartment', 'House', 'Villa'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private speechAi: SpeechAiService
  ) {
    this.reqForm = this.fb.group({
      area: ['', Validators.required],
      propertyType: ['', Validators.required],
      schoolPreference: ['', Validators.required],
      trafficLevel: ['', Validators.required],
      yearBuilt: ['', Validators.required],
      shopsNearby: ['', Validators.required],
      desiredLifestyle: ['', Validators.required],
      comments: ['', Validators.required]
    });
  }

  nextPage() {
    if (this.reqForm.valid) {
      sessionStorage.setItem('requirements', JSON.stringify(this.reqForm.value));
      this.router.navigate(['/finance']);
    }
  }

  async doSpeechPrefill() { /* unchanged */ }
}