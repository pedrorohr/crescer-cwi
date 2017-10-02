import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from '@angular-mdc/web';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MembersComponent } from './members/members.component';
import { StudentService } from './common/students/student.service';
import { SeatingMapComponent } from './seating-map/seating-map.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MembersComponent,
    SeatingMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
