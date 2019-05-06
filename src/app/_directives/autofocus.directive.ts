import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterViewInit {

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }

}

// https://shekhargulati.com/2017/12/02/adding-autofocus-to-an-input-field-in-an-angular-5-bootstrap-4-application/ a faire tutorial
/*
Create a new directive using the command shown below.

1
$ ng g directive autofocus
It will generate the autofocus directive stub. Replace content of autofocus.directive.ts with the one shown below.

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
import { Directive, AfterViewInit, ElementRef } from '@angular/core';
 
@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterViewInit {
 
  constructor(private el: ElementRef) {
  }
 
  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
 
}*/
