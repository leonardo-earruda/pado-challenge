import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/modules/dto/log-dto';
import { MatTableDataSource } from '@angular/material/table';
import { LogService } from 'src/app/modules/services/logs/logs.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-acess-logs-table',
  templateUrl: './acess-logs-table.component.html',
  styleUrls: ['./acess-logs-table.component.scss'],
})
export class AcessLogsTableComponent implements OnInit {
  filterInput = new FormControl('', { updateOn: 'blur' });
  dataSource = new MatTableDataSource<Log>();
  displayedColumns = ['lockId', 'logId', 'estadoAtualFechadura', 'metodoAbertura', 'macAdress', 'userName'];
  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.fetchLogs();
  }

  public fetchLogs() {
    this.dataSource.data = [];
    this.logService.fetchData().subscribe((res) => {
      res.reverse();
      this.dataSource.data = res;
    });
  }

  public teste() {}

  public visualizarPorUserId() {
    this.displayedColumns.splice(0, 1, 'userId');
  }

  public visualizarPorLockId() {
    this.displayedColumns.splice(0, 1, 'lockId');
  }
}
