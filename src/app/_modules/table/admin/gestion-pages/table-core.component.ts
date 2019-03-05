import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { trigger, sequence, state, animate, transition, style, query, stagger, keyframes } from '@angular/animations';
import { Section } from 'src/app/_models/section';
import { TitreMenu } from 'src/app/_models/titre-menu';
import { SousTitreMenu } from 'src/app/_models/sous-titre-menu';
import { DtoAdminGestionPagesTable as Dto } from 'src/app/_dto/admin/gestion-pages/table';

@Component({
  selector: 'app-module-table-admin-gestion-pages-core',
  templateUrl: './table-core.component.html',
  styleUrls: ['./table-core.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true}),

          query(':leave', style({ opacity: 1 }), {optional: true}),

          query(':leave', stagger('300ms', [
            animate('1s ease-in', keyframes([
              style({opacity: 1, transform: 'translateY(-75%)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
              style({opacity: 0, transform: 'translateY(0)',     offset: 1.0}),
            ]))]), {optional: true})
      ])
    ]),
    trigger('anim', [
      transition('* => void', [
        style({ height: '*', opacity: '1', transform: 'translateX(0)', 'box-shadow': '0 1px 4px 0 rgba(0, 0, 0, 0.3)'}),
        sequence([
          animate('.25s ease', style({ height: '*', opacity: '.2', transform: 'translateX(20px)', 'box-shadow': 'none'  })),
          animate('.1s ease', style({ height: '0', opacity: 0, transform: 'translateX(20px)', 'box-shadow': 'none'  }))
        ])
      ]),
      transition('void => active', [
        style({ height: '0', opacity: '0', transform: 'translateX(20px)', 'box-shadow': 'none' }),
        sequence([
          animate('.1s ease', style({ height: '*', opacity: '.2', transform: 'translateX(20px)', 'box-shadow': 'none'  })),
          // tslint:disable-next-line:max-line-length
          animate('.35s ease', style({ height: '*', opacity: 1, transform: 'translateX(0)', 'box-shadow': '0 1px 4px 0 rgba(0, 0, 0, 0.3)' }))
        ])
      ])
    ]),
    trigger('fadeInOut', [
      transition(':increment', [
        query(':enter', [
          style({ opacity: 0 }),
          animate('500ms', style({ opacity: 1 })),
        ])
      ]),
      transition(':decrement', [
        query(':leave', [
          animate('500ms', style({ opacity: 0 })),
        ])
      ]),
    ])
  ]
})
export class ModuleTableAdminGestionPagesCoreComponent implements OnInit {
  @HostBinding('@fadeInOut') fadeInAnimation = true;
  @HostBinding('@anim') anim = true;
  @HostBinding('style.display') display = 'block';
  @Input() section: Section[];
  @Output() outputEdit: EventEmitter<Dto> = new EventEmitter<Dto>();
  @Output() outputDelete: EventEmitter<Dto> = new EventEmitter<Dto>();
  @Output() outputUp: EventEmitter<Dto> = new EventEmitter<Dto>();
  @Output() outputDown: EventEmitter<Dto> = new EventEmitter<Dto>();

  constructor() { }

  ngOnInit() {
  }

  edit(item: Dto) {
    this.outputEdit.emit(item);
  }

  delete(item: Dto) {
    this.outputDelete.emit(item);
  }

  up(item: Dto) {
    this.outputUp.emit(item);
  }

  down(item: Dto) {
    this.outputDown.emit(item);
  }
}
