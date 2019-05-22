import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDialogModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { EstadoModule } from '../modules/estado/estado.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [ToolbarComponent, HomePageComponent, ErrorPageComponent, ConfirmationDialogComponent],
  exports: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule,
    EstadoModule,
    MatDialogModule,
    MatTooltipModule
  ]
})
export class SharedModule { }
