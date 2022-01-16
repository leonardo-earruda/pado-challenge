import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/modules/dto/log-dto';
import { MatTableDataSource } from '@angular/material/table';
import { LogService } from 'src/app/modules/services/logs/logs.service';
import { FormArray, FormControl } from '@angular/forms';
import { MetodoAberturaEnum, TipoDoEventoEnum } from 'src/app/modules/enums/dados.enum';
import moment from 'moment';

@Component({
  selector: 'app-acess-logs-table',
  templateUrl: './acess-logs-table.component.html',
  styleUrls: ['./acess-logs-table.component.scss'],
})
export class AcessLogsTableComponent implements OnInit {
  visualizadoPorUsuario = true;
  allLogs: Log[];
  filterInput = new FormControl('');
  dataSource = new MatTableDataSource<Log>();
  displayedColumns = [
    'lockId',
    'logId',
    'estadoAtualFechadura',
    'metodoAbertura',
    'macAdress',
    'userName',
    'tipoEvento',
    'horarioEvento',
  ];
  displayedColumnsUsuario = [
    'userId',
    'logId',
    'estadoAtualFechadura',
    'metodoAbertura',
    'macAdress',
    'userName',
    'tipoEvento',
    'horarioEvento',
  ];
  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.fetchLogs();
  }

  public fetchLogs() {
    this.logService.fetchData().subscribe((res) => {
      res.reverse();
      this.allLogs = res;
      this.dataSource.data = res;
    });
  }

  public filtro() {
    this.dataSource.data = this.allLogs.filter((a) => {
      if (this.visualizadoPorUsuario) {
        const listraFiltrada =
          a.payload.userName.includes(this.filterInput.value) || a.payload.userId.includes(this.filterInput.value);
        return listraFiltrada;
      }
      return a.lockId.includes(this.filterInput.value) || a.mac.includes(this.filterInput.value);
    });
  }

  public getTableText(text: number) {
    return MetodoAberturaEnum[text];
  }

  public getEventTypeText(text: number) {
    return TipoDoEventoEnum[text];
  }

  public epochToDate(epochDate: number) {
    const humanDate = new Date(epochDate);
    const humanDateFormatado = moment(humanDate).format('DD/MM/YYYY, HH:mm:ss');
    return humanDateFormatado;
  }

  public getDisplayedColumns() {
    if (this.visualizadoPorUsuario) {
      return this.displayedColumnsUsuario;
    }
    return this.displayedColumns;
  }
}
