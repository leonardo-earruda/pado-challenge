import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { LogService } from '../modules/services/logs/logs.service';
import { AcessLogsTableComponent } from './acess-logs-table/acess-logs-table/acess-logs-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AcessLogsTableComponent],
  imports: [MaterialModule, HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [AcessLogsTableComponent],
  providers: [LogService],
})
export class LogsModule {}
