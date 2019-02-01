import { Component, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-nouveau-section',
  templateUrl: './nouveau-section.component.html',
  styleUrls: ['./nouveau-section.component.scss']
})
export class NouveauSectionComponent implements OnInit {
  model: any = {};

  public faSizeProp: SizeProp;
  constructor() { }

  ngOnInit() {
    this.faSizeProp = 'lg';
  }

}
