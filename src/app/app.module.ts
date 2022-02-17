import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ConfigService } from './services/config.service';
import { HttpClientModule } from '@angular/common/http';

import { StepProgressBarModule } from '@digitalspace/step-progress-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { StorageService } from './services/storage-service.service';
import { SharedModule } from './shared/shared.module';

export function initConfig(configService: ConfigService) {
  return async () => {
    await configService.init();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StepProgressBarModule,
    NgbModule,
    SharedModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [ConfigService],
      multi: true,
    },
    ConfigService,
    StorageService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
