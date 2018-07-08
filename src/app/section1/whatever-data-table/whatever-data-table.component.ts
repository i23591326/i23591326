import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { WhateverDataTableDataSource } from './whatever-data-table-datasource';

@Component({
  selector: 'app-whatever-data-table',
  templateUrl: './whatever-data-table.component.html',
  styleUrls: ['./whatever-data-table.component.css']
})
export class WhateverDataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: WhateverDataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'state', 'date'];

  ngOnInit() {
    this.dataSource = new WhateverDataTableDataSource(this.paginator, this.sort);
  }
}
