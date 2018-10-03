import { HeaderComponent } from './header/header.component';
import { MyOwnMaterialModule } from './material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, BodyComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MyOwnMaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
