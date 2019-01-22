import { Component, OnInit } from '@angular/core';
import { faCoffee, faDesktop, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  title = 'PartagesWebAngular';
  faCoffee = faCoffee;
  faDesktop = faDesktop;
  faGlobe = faGlobe;
  public faSizeProp: SizeProp;
  public faSpinPropDesktop: boolean;
  public faSpinPropGlobe: boolean;

  ngOnInit() {
    this.faSizeProp = 'lg';
    this.faSpinPropDesktop = false;
    this.faSpinPropGlobe = false;
  }

  alertify() {
    //
  }

}
