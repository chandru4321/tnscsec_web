import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-take-action',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './takeaction.html',
  styleUrls: ['./takeaction.css'],
  encapsulation: ViewEncapsulation.None   // ✅ put HERE — NOT inside imports
})
export class TakeAction{
  name: string = '';
  email: string = '';
  
  submit() {}
  close() {}
}
