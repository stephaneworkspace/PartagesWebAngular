import { Component, OnInit } from '@angular/core';
import { faCoffee, faDesktop } from '@fortawesome/free-solid-svg-icons';
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
  public faSizeProp: SizeProp;
  public faSpinProp: boolean; // on mouse over true

  ngOnInit() {
    this.faSizeProp = '5x';
    this.faSpinProp = false;
  }
}
