import { Component, OnInit } from '@angular/core';
import { faCoffee, faDesktop, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { Router, NavigationStart, NavigationEnd, NavigationError, Event } from '@angular/router';
import { AlertifyService } from './_services/alertify.service';
import { MessagerieService } from './_services/messagerie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'PartagesWebAngular';
  faCoffee = faCoffee;
  faDesktop = faDesktop;
  faGlobe = faGlobe;
  public faSizeProp: SizeProp;
  public faSpinPropDesktop: boolean;
  public faSpinPropGlobe: boolean;
  messagesNonLu = 0;

  constructor(private router: Router, private alertify: AlertifyService, private messagerieService: MessagerieService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        this.messagerieService.countMessagerie().subscribe((res: number) => {
          this.messagesNonLu = res;
          localStorage.setItem('messagesNonLu', JSON.stringify(this.messagesNonLu));
        }, error => {
          this.messagesNonLu = 0;
          // this.alertify.error('Impossible de se connecter à la messagerie !');
        });
      }

      if (event instanceof NavigationEnd) {
        // Show loading indicator
      }

      if (event instanceof NavigationError) {
          // Hide loading indicator

          // Present error to user
          alertify.error(event.error);
      }
  });
}

  ngOnInit() {
    this.faSizeProp = 'lg';
    this.faSpinPropDesktop = false;
    this.faSpinPropGlobe = false;
  }

}
