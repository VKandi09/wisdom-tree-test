import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerLinks = [
    { text: 'Home', url: '#' },
    { text: 'Privacy Policy', url: '#' },
    { text: 'Your Privacy Choices', url: '#' },
    { text: 'Cookie Policy', url: '#' },
    { text: 'Terms of Use', url: '#' },
    { text: 'Accessibility', url: '#' },
    { text: 'Corporate Responsibility', url: '#' },
    { text: 'Site Map', url: '#' }
  ];
}
