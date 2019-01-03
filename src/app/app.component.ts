import { Component, OnInit } from '@angular/core';
import { faCoffee, faDesktop, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PartagesWebAngular';
  faCoffee = faCoffee;
  faDesktop = faDesktop;
  faGlobe = faGlobe;
  public faSizeProp: SizeProp;
  public faSpinPropDesktop: boolean;
  public faSpinPropGlobe: boolean;

  ngOnInit() {
    this.faSizeProp = '1x';
    this.faSpinPropDesktop = false;
    this.faSpinPropGlobe = false;
  }
}
