import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpeechAiService } from '../../services/speech-ai.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html'
})
export class FinanceComponent {
  financeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private speechAi: SpeechAiService
  ) {
    this.financeForm = this.fb.group({
      rentBudget: ['', Validators.required],
      carOwned: ['', Validators.required],
      existingDebts: ['', Validators.required],
      incomeSource: ['', Validators.required],
      otherFinancialNotes: ['', Validators.required]
    });
  }

  nextPage() {
    if (this.financeForm.valid) {
      sessionStorage.setItem('finance', JSON.stringify(this.financeForm.value));
      this.router.navigate(['/payment']);
    }
  }

  async doSpeechPrefill() { /* unchanged */ }
}