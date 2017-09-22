import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MdcTemporaryDrawerComponent } from '@angular-mdc/web';

@Component({
  selector: 'crescer-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  links = [
    { name: 'Members', route: 'members', icon: 'people', desc: '' },
    { name: 'Seating Map', route: 'seating-map', icon: 'person_pin', desc: '' },
    { name: 'Quiz', route: 'quiz', icon: 'question_answer', desc: '' },
    { name: 'About', route: 'about', icon: 'info', desc: '' }
  ];
  @ViewChild('drawer') drawer: MdcTemporaryDrawerComponent;
  constructor(private router: Router) { }

  public handleMenuClick(): void {
    !this.drawer.isOpen() ? this.drawer.open() : this.drawer.close();
  }

}
