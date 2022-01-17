import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import moment from 'moment';
import { Log } from 'src/app/modules/dto/log-dto';
import { MetodoAberturaEnum, TipoDoEventoEnum } from 'src/app/modules/enums/dados.enum';
import { LogService } from 'src/app/modules/services/logs/logs.service';

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
    'userName',
    'tipoEvento',
    'estadoAtualFechadura',
    'metodoAbertura',
    'horarioEvento',
    'logId',
    'macAdress',
  ];
  displayedColumnsUsuario = [
    'userId',
    'userName',
    'tipoEvento',
    'estadoAtualFechadura',
    'metodoAbertura',
    'horarioEvento',
    'logId',
    'macAdress',
  ];
  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.fetchLogs();
  }

  public fetchLogs() {
    this.dataSource.data = [];
    this.logService.fetchData().subscribe((res) => {
      res.reverse();
      this.allLogs = res;
      this.dataSource.data = res;
    });
  }

  public filtro() {
    let listraFiltrada = [];

    if (this.visualizadoPorUsuario) {
      listraFiltrada = this.allLogs.filter((log) => this.filtrarListaPorUsuario(log));
    } else {
      listraFiltrada = this.allLogs.filter((log) => this.filtrarPorFechadura(log));
    }

    this.dataSource.data = listraFiltrada;
  }

  private filtrarPorFechadura(log: any) {
    return (
      log.lockId.trim().toLowerCase().includes(this.filterInput.value.trim().toLowerCase()) ||
      log.mac.trim().toLowerCase().includes(this.filterInput.value.trim().toLowerCase())
    );
  }

  private filtrarListaPorUsuario(log: any) {
    const payload = log.payload;

    const listraFiltrada =
      payload.userName.trim().toLowerCase().includes(this.filterInput.value.trim().toLowerCase()) ||
      payload.userId.trim().toLowerCase().includes(this.filterInput.value.trim().toLowerCase());
    return listraFiltrada;
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
    return this.visualizadoPorUsuario ? this.displayedColumnsUsuario : this.displayedColumns;
  }
}
