import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user';

@Component({
  selector: 'app-assigning-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class AdminComponent {

  tableData: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadTable();
  }

  loadTable() {
    this.userService.getUsers().subscribe({
      next: (res) => {
        this.tableData = res;  
      },
      error: (err) => {
        console.error("API ERROR:", err);
      }
    });
  }
}
