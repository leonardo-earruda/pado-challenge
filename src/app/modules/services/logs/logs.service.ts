import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Log } from '../../dto/log-dto';

@Injectable()
export class LogService {
  private jsonUrl = 'assets/data.json';
  constructor(private http: HttpClient) {}

  fetchData(): Observable<Log[]> {
    return this.http.get<Log[]>(this.jsonUrl);
  }
}
