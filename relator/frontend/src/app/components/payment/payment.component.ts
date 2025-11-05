import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../services/api.service';

declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html'
})
export class PaymentComponent implements OnInit {
  payForm = this.fb.group({
    paymentDetails: ['']
  });

  constructor(private fb: FormBuilder, private api: ApiService) {}

  ngOnInit() {}

  startPayment() {
    this.api.createOrder().subscribe(order => {
      const options = {
        key: 'YOUR_RAZORPAY_KEY',
        amount: order.amount,
        currency: 'INR',
        name: 'Realtor.ai',
        description: 'Service Payment',
        order_id: order.id,
        handler: (response: any) => {
          this.submitApplication(response);
        }
      };
      const rzp = new Razorpay(options);
      rzp.open();
    });
  }

  submitApplication(paymentResponse: any) {
    const allData = {
      demoInfo: JSON.parse(sessionStorage.getItem('demoInfo')!),
      requirements: JSON.parse(sessionStorage.getItem('requirements')!),
      finance: JSON.parse(sessionStorage.getItem('finance')!),
      payment: paymentResponse
    };
    this.api.submitApplication(allData).subscribe({
      next: () => alert('Application submitted!'),
      error: (err) => alert('Submission error: ' + err)
    });
  }
}