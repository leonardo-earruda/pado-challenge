import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

const materialModules = [
  MatTableModule,
  MatFormFieldModule,
  MatSelectModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
];

@NgModule({
  declarations: [],
  imports: [...materialModules, HttpClientModule],
  exports: [...materialModules],
})
export class MaterialModule {}
