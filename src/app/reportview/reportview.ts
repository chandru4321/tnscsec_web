import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reportview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reportview.html',
  styleUrls: ['./reportview.css']
})
export class Reportview {

  reportData: any = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.http.get<any>(
      'https://jk901cnt-5000.inc1.devtunnels.ms/api/complaint-register-form2/list'
    ).subscribe(res => {

      const list = Array.isArray(res.data) ? res.data : [];

      this.reportData = list.find((x: any) =>
        String(x.form1_id) === String(id)
      );

      console.log('MATCHED RECORD =', this.reportData);
    });
  }
  downloadPdf() {

    const container = document.querySelector('.table-background')?.cloneNode(true) as HTMLElement;

    // ❌ remove download button before print
    container.querySelector('.download-btn')?.remove();

    const content = container.innerHTML;

    const win = window.open('', '', 'width=1400,height=900');

    win?.document.write(`
    <html>
      <head>
        <title>Complaint Report</title>
        <style>
          @page {
            size: A4 landscape;
            margin: 10mm;
          }
          body {
            font-family: Segoe UI, Arial;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 11px;
          }
          th, td {
            border: 1px solid #666;
            padding: 6px;
            text-align: left;
            white-space: nowrap;
          }
          thead {
            background: #edf3ff;
          }
        </style>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `);

    win?.document.close();
    win?.focus();
    win?.print();
    win?.close();
  }
}



//   downloadPdf() {
//     window.print();
//   }
// }
