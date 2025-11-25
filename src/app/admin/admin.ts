import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from "../about/about-routing-module";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, AboutRoutingModule],   // <-- REQUIRED FOR *ngFor
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class AdminComponent {

  tableData: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadTable();
  }

  loadTable() {
    this.http.get<any>('https://lg0w5w01-4000.inc1.devtunnels.ms/api/complaint-register-form2')
      .subscribe({
        next: (res) => {
          console.log("ADMIN API RESPONSE =", res);

          // Your correct array is res.data
          this.tableData = Array.isArray(res.data) ? res.data : [];
        },
        error: (err) => console.error("API ERROR:", err)
      });
  }
}




