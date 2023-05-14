import { StorageService } from './../../services/storage/storage.service';
import { Component, OnInit } from '@angular/core';
import { SharedUtilityComponent } from '../shared-utility/shared-utility.component';
import { AuthService } from '../../services/auth/auth.service';
import { finalize } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-shared-footer',
  templateUrl: './shared-footer.component.html',
  styleUrls: ['./shared-footer.component.scss']
})
export class SharedFooterComponent extends SharedUtilityComponent implements OnInit {

  isLoggedIn = false;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {
    super();
  }

  override ngOnInit(): void {
    this.listenforChange();
  }

  login(): void {
    this.isLoading = true;
    const sub = this.authService.login({})
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: (data) => {
          this.storageService.saveItem('token', data.jwt);
          this.router.navigate(['/private']);
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  logOut(): void {
    this.storageService.clearItem('token');
    this.router.navigate(['/public']);
  }

  private checkLoginStatus(): void {
    const token = this.storageService.getItem('token');
    this.isLoggedIn = token ? true : false;
  }

  private listenforChange(): void {
    const sub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
          this.checkLoginStatus();
      }
    });

    this.subscriptions.push(sub);
  }

}
