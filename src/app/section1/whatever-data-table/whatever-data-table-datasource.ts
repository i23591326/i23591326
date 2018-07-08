import {DataSource} from '@angular/cdk/collections';
import {MatPaginator, MatSort} from '@angular/material';
import {map} from 'rxjs/operators';
import {Observable, of as observableOf, merge} from 'rxjs';
import {randomDate} from '../../shared/functions/random-date.function';


// TODO: Replace this with your own data model type

export enum WhateverDataState {
  state1 = 'STATE_1',
  state2 = 'STATE_2',
  state3 = 'STATE_3'
}

export interface WhateverDataTableItem {
  name: string;
  id: number;
  state?: WhateverDataState;
  date: Date;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: WhateverDataTableItem[] = [
  {id: 1, name: 'Hydrogen', state: WhateverDataState.state2, date: randomDate(new Date(2017, 1, 1), new Date())},
  {id: 2, name: 'Helium', state: WhateverDataState.state2, date: randomDate(new Date(2017, 1, 1), new Date())},
  {id: 3, name: 'Lithium', state: WhateverDataState.state3, date: randomDate(new Date(2017, 1, 1), new Date())},
  {id: 4, name: 'Beryllium', state: WhateverDataState.state1, date: randomDate(new Date(2017, 1, 1), new Date())},
  {id: 5, name: 'Boron', state: WhateverDataState.state3, date: randomDate(new Date(2017, 1, 1), new Date())},
  {id: 6, name: 'Carbon', state: WhateverDataState.state1, date: randomDate(new Date(2017, 1, 1), new Date())},
  {id: 7, name: 'Nitrogen', state: WhateverDataState.state1, date: randomDate(new Date(2017, 1, 1), new Date())},
  {id: 8, name: 'Oxygen', state: WhateverDataState.state1, date: randomDate(new Date(2017, 1, 1), new Date())},
  {id: 9, name: 'Fluorine', state: WhateverDataState.state2, date: randomDate(new Date(2017, 1, 1), new Date())},
  {id: 10, name: 'Neon', state: WhateverDataState.state1, date: randomDate(new Date(2017, 1, 1), new Date())},
  {id: 11, name: 'Sodium', state: WhateverDataState.state2, date: randomDate(new Date(2017, 1, 1), new Date())},
  {id: 12, name: 'Magnesium', state: WhateverDataState.state2, date: randomDate(new Date(2017, 1, 1), new Date())},
  {id: 13, name: 'Aluminum', state: WhateverDataState.state3, date: randomDate(new Date(2017, 1, 1), new Date())},
  {id: 14, name: 'Silicon', state: WhateverDataState.state2, date: randomDate(new Date(2017, 1, 1), new Date())},
  {id: 15, name: 'Phosphorus', state: WhateverDataState.state3, date: randomDate(new Date(2017, 1, 1), new Date())},
  {id: 16, name: 'Sulfur', state: WhateverDataState.state2, date: randomDate(new Date(2017, 1, 1), new Date())},
  {id: 17, name: 'Chlorine', state: WhateverDataState.state2, date: randomDate(new Date(2017, 1, 1), new Date())},
  {id: 18, name: 'Argon', state: WhateverDataState.state1, date: randomDate(new Date(2017, 1, 1), new Date())},
  {id: 19, name: 'Potassium', state: WhateverDataState.state1, date: randomDate(new Date(2017, 1, 1), new Date())},
  {id: 20, name: 'Calcium', state: WhateverDataState.state1, date: randomDate(new Date(2017, 1, 1), new Date())},
];

/**
 * Data source for the WhateverDataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class WhateverDataTableDataSource extends DataSource<WhateverDataTableItem> {
  data: WhateverDataTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<WhateverDataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {
  }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: WhateverDataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: WhateverDataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        case 'date':
          return compare(+a.date, +b.date, isAsc);
        case 'state':
          return compareState(a.state, b.state, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

function compareState(a: WhateverDataState, b: WhateverDataState, isAsc) {
 const WhateverDataStateOrder = new Map([
   [WhateverDataState.state1, 1],
   [WhateverDataState.state3, 2],
   [WhateverDataState.state2, 3],
 ] );
  return (WhateverDataStateOrder.get(a) < WhateverDataStateOrder.get(b) ? -1 : 1) * (isAsc ? 1 : -1);
}
