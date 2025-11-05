import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoInfoComponent } from './components/demo-info/demo-info.component';
import { RequirementsComponent } from './components/requirements/requirements.component';
import { FinanceComponent } from './components/finance/finance.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: '/demo-info', pathMatch: 'full' },
  { path: 'demo-info', component: DemoInfoComponent },
  { path: 'requirements', component: RequirementsComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'payment', component: PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }