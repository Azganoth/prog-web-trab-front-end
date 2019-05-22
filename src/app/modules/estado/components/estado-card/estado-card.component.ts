import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { from as ObservableFrom } from 'rxjs';
import { Estado } from '../../shared/estado.model';
import { EstadoService } from '../../shared/estado.service';

@Component({
  selector: 'app-estado-card',
  templateUrl: './estado-card.component.html',
  styleUrls: ['./estado-card.component.scss']
})
export class EstadoCardComponent implements OnInit {

  headers: string[];
  dataSource: MatTableDataSource<Estado>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private service: EstadoService
  ) { }

  ngOnInit() {
    this.headers = ['nome'];

    // Reset back to the first page, if the user changes the sort order.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    this.dataSource = new MatTableDataSource<Estado>();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    ObservableFrom(this.service.find().then(data => data))
      .subscribe(data => this.dataSource.data = data);
  }

}
