import { Component, OnInit, ViewChild } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { SectionService } from 'src/app/_services/section.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nouveau-section',
  templateUrl: './nouveau-section.component.html',
  styleUrls: ['./nouveau-section.component.scss']
})
export class NouveauSectionComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  model: any = {};

  public faSizeProp: SizeProp;
  constructor(
    private alertify: AlertifyService,
    private sectionService: SectionService
) { }

  ngOnInit() {
    this.faSizeProp = 'lg';
    this.model.typeSelect = 'none';
  }

  createSection() {
    this.sectionService.createSection(this.model).subscribe(next => {
      this.alertify.success('Section crée');
      // this.editForm.reset(this.section); // redirection à faire
    }, error => {
      this.alertify.error(error);
    });
  }
}
