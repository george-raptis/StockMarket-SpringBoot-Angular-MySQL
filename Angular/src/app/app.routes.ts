import {Routes} from '@angular/router';
import {SigninComponent} from './components/signin/signin.component';
import {SignupComponent} from './components/signup/signup.component';
import {HomeComponent} from './components/home/home.component';
import {StockInfoComponent} from './components/stocks/stock-info/stock-info.component';
import {WalletComponent} from './components/wallet/wallet.component';
import {InventoryComponent} from './components/inventory/inventory.component';
import {WalletDepositComponent} from './components/wallet/wallet-deposit/wallet-deposit.component';
import {ProfileComponent} from './components/profile/profile.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: SigninComponent},
  { path: 'register', component: SignupComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'walletDeposit', component: WalletDepositComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'stockInfo', component: StockInfoComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

