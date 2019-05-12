import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
import { MessagerieService } from '../_services/messagerie.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() messagesNonLu: number;
  private messagesNonLuLocal: number;
  model: any = {};

  constructor(public authService: AuthService,
    private alertify: AlertifyService,
    private router: Router,
    private messagerieService: MessagerieService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Login avec succès');

      // Show loading indicator
      if (localStorage.getItem('token')) {
        this.messagerieService.countMessagerie().subscribe((res: number) => {
          this.messagesNonLuLocal = res;
        }, error => {
          this.messagesNonLuLocal = 0;
          this.alertify.error('Impossible de se connecter à la messagerie !');
        });
      } else {
        this.messagesNonLuLocal = 0;
      }


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
    this.messagesNonLuLocal = 0;
    this.authService.logout(null).subscribe(next => {
      this.alertify.error('Erreur lors de la deconnexion');
      this.logout();
    }, error => {
      this.alertify.message('Deconnexion du site');
      this.router.navigate(['/']);
    });
  }

}
