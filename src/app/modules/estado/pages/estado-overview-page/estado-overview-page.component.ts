import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { from as ObservableFrom } from 'rxjs';
import { ConfirmationDialogComponent } from '../../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { EstadoDialogComponent } from '../../components/estado-dialog/estado-dialog.component';
import { Estado } from '../../shared/estado.model';
import { EstadoService } from '../../shared/estado.service';

@Component({
  selector: 'app-estado-overview-page',
  templateUrl: './estado-overview-page.component.html',
  styleUrls: ['./estado-overview-page.component.scss']
})
export class EstadoOverviewPageComponent implements OnInit {

  headers: string[];
  dataSource: MatTableDataSource<Estado>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private service: EstadoService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.headers = ['id', 'nome', 'operations'];

    // Reset back to the first page, if the user changes the sort order.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    this.dataSource = new MatTableDataSource<Estado>();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.updateData();
  }

  applySearch(filter: string) {
    this.dataSource.filter = filter.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  updateData() {
    ObservableFrom(this.service.find().then(data => data))
      .subscribe(data => this.dataSource.data = data);
  }

  showEstado(estado?: Estado) {
    this.dialog.open(EstadoDialogComponent, {
      width: '300px',
      data: estado || {}
    }).afterClosed().subscribe(result => {
      if (result) {
        if (result.id) {
          this.update(result);
        } else {
          this.insert(result);
        }
      }
    });
  }

  insert(estado: Estado) {
    this.service.insert(estado).then(() => {
      this.updateData();
    });
  }

  update(estado: Estado) {
    this.service.update(estado).then(() => {
      this.updateData();
    });
  }

  delete(estado: Estado) {
    this.service.deleteById(estado.id).then(() => {
      this.updateData();
    });
  }

  confirmDelete(estado: Estado) {
    this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: {
        message: `Tem certeza que você deseja remover o estado "${estado.nome}"?`,
        accept: () => {
          this.delete(estado);
        }
      }
    });
  }

}
