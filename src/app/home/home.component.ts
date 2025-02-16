import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  topNavItems = [
    { name: 'WisdomTree Investments', dropdownEnabled: true },
    { name: 'WisdomTree Prime' },
    { name: 'WisdomTree Connect' },
    { name: 'Investor Relations' },
    { name: 'Local Sites', dropdownEnabled: true }
  ];

  mainNavItems = [
    { name: 'ABOUT US' },
    { name: 'THOUGHT LEADERSHIP' },
    { name: 'PRESS' },
    { name: 'CAREERS' },
    { name: 'CONTACT' }
  ];
}