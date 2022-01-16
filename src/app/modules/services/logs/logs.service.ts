import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableLoader } from 'src/app/shared/utils/pagination-sorting/default-loader';
import { Log } from '../../dto/log-dto';

@Injectable()
export class LogService implements TableLoader<Log> {
  private jsonUrl = 'assets/data.json';
  constructor(private http: HttpClient) {}

  fetchData(): Observable<Log[]> {
    return this.http.get<Log[]>(this.jsonUrl);
  }
}
