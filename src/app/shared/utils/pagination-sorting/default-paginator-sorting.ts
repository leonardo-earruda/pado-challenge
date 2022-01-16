import { Directive } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableLoader } from './default-loader';

@Directive()
export abstract class DefaultPaginatorSortDirective<T> {
  abstract dataSource: any;
  constructor(private tableLoader: TableLoader<T>) {}

  protected _loadData(): void {
    this.dataSource = new MatTableDataSource<T>();
    this.dataSource.data = [];
  }
}
