import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { productList } from './table.mock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [CommonModule,RouterLink],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  prodList = productList
}
