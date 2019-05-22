import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule, MatTooltipModule
} from '@angular/material';
import { AppRoutingModule } from '../../app-routing.module';
import { EstadoCardComponent } from './components/estado-card/estado-card.component';
import { EstadoOverviewPageComponent } from './pages/estado-overview-page/estado-overview-page.component';
import { EstadoDialogComponent } from './components/estado-dialog/estado-dialog.component';

@NgModule({
  declarations: [EstadoCardComponent, EstadoOverviewPageComponent, EstadoDialogComponent],
  exports: [
    EstadoCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    EstadoDialogComponent
  ]
})
export class EstadoModule { }
