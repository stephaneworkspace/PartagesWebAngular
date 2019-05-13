import { Component, OnInit, Input, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
import { MessagerieService } from '../_services/messagerie.service';
import { User } from '../_models/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModuleModalMessagerieMessagesNonLuComponent } from '../_modules/modal/messagerie/messages-non-lu.component';

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
    private modalService: NgbModal) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const messagesNonLu: SimpleChange = changes.messagesNonLu;
    // console.log('prev value: ', messagesNonLu.previousValue);
    // console.log('got name: ', messagesNonLu.currentValue);
    this._messagesNonLu = messagesNonLu.currentValue;
    if (this._messagesNonLu > 0 && this.loggedIn()) {
      this.openModalMessage();
    }
  }

  login() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('messagesNonLu');
    localStorage.clear();
    this.authService.login(this.model).subscribe(next => {
      this._messagesNonLu = JSON.parse(localStorage.getItem('messagesNonLu'));
      if (this._messagesNonLu > 0 && this.loggedIn()) {
        this.openModalMessage();
      }
      this.alertify.success('Login avec succès');
      this.router.navigate(['/']);
    }, error => {
      this.router.navigate(['/members']);
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  getUserName() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    return user.username;
  }

  logout() {
    this._messagesNonLu = 0;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('messagesNonLu');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertify.message('Deconnexion du site');
    this.router.navigate(['/']);
  }

  openModalMessage() {
    const modalRef = this.modalService.open(ModuleModalMessagerieMessagesNonLuComponent, { centered: true });
    modalRef.componentInstance.nombresMessagesNonLu = this._messagesNonLu;
    modalRef.componentInstance.output.subscribe((result) => {
      // this.output.emit(result);
      alert('à faire');
    });
  }

}
