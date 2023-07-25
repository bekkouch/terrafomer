import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PromptComponent } from './prompt/prompt.component';
import { PromptModule } from './prompt/prompt.module';
import { ScriptComponent } from './script/script.component';
import { ScriptModule } from './script/script.module';
import { SelectorComponent } from './selector/selector.component';
import { SelectorModule } from './selector/selector.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { FooterComponent } from './footer/footer.component';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PromptComponent,
    ScriptComponent,
    SelectorComponent,
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    PromptModule,
    ScriptModule,
    SelectorModule,
    ToolbarModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
