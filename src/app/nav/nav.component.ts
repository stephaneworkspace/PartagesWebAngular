import { Component, OnInit, Input, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
import { MessagerieService } from '../_services/messagerie.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnChanges {
  @Input() messagesNonLu: number;
  private _messagesNonLu: number;
  model: any = {};

  constructor(public authService: AuthService,
    private alertify: AlertifyService,
    private router: Router,
    private messagerieService: MessagerieService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const messagesNonLu: SimpleChange = changes.messagesNonLu;
    // console.log('prev value: ', messagesNonLu.previousValue);
    // console.log('got name: ', messagesNonLu.currentValue);
    this._messagesNonLu = messagesNonLu.currentValue;
  }

  login() {
    localStorage.removeItem('token');
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Login avec succès');
      this.router.navigate(['/']);
      this.messagerieService.countMessagerie().subscribe((res: number) => {
        this._messagesNonLu = res;
      }, error => {
        this._messagesNonLu = 0;
      });
    }, error => {
      this.router.navigate(['/members']);
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this._messagesNonLu = 0;
    this.authService.logout(null).subscribe(next => {
      this.alertify.error('Erreur lors de la deconnexion');
      this.logout();
    }, error => {
      this.alertify.message('Deconnexion du site');
      this.router.navigate(['/']);
    });
  }

}
