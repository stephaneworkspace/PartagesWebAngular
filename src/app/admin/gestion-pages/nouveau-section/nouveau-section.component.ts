import { Component, OnInit, ViewChild } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { SectionService } from 'src/app/_services/section.service';
import { NgForm } from '@angular/forms';
import { Icone } from 'src/app/_models/icone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nouveau-section',
  templateUrl: './nouveau-section.component.html',
  styleUrls: ['./nouveau-section.component.scss']
})
export class NouveauSectionComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  model: any = {};
  iconesSelectBox: Icone[];

  public faSizeProp: SizeProp;
  constructor(
    private route: ActivatedRoute,
    private alertify: AlertifyService,
    private sectionService: SectionService
) { }

  /**
   * Resolve ici
   **/
  ngOnInit() {
    this.faSizeProp = 'lg';
    this.model.typeSelect = 'none';
    this.route.data.subscribe(data => {
      // Resolver
      this.iconesSelectBox = data.selectBox.slice();
    });
  }

  submitForm() {
    this.sectionService.createSection(this.model).subscribe(next => {
      this.alertify.success('Section crée');
      // this.editForm.reset(this.section); // redirection à faire
    }, error => {
      // console.log(error);
      this.alertify.error(error.error);
    });
  }
}
