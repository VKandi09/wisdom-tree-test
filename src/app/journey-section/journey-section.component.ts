import { Component } from '@angular/core';

@Component({
  selector: 'app-journey-section',
  templateUrl: './journey-section.component.html',
  styleUrls: ['./journey-section.component.css']
})
export class JourneySectionComponent {
  journeyCards = [
    {
      title: 'WisdomTree Investments',
      description: 'Explore our leading exchange-traded product range that offers access to an unparalleled selection of unique and smart exposures.',
      image: 'investment-site.jpg',
      buttons: [
        { text: 'U.S. INVESTORS', link: '#' },
        { text: 'EU INVESTOR SITE', link: '#' }
      ]
    },
    {
      title: 'WisdomTree Prime®',
      description: 'Financial services app built from the ground up on blockchain rails with DeFi concepts. Putting the consumer at the heart of the financial eco-system, giving them total control and choice over their financial lives.',
      image: 'prime-bg.jpg',
      buttons: [
        { text: 'LEARN MORE', link: '#' }
      ]
    },
    {
      title: 'WisdomTree Connect™',
      description: 'Institutional platform designed to offer seamless access to WisdomTree\'s tokenized real world assets (RWA). It integrates the robust features of blockchain technology with the investment needs of both traditional and crypto-native financial institutions and businesses.',
      image: 'connect-bg.jpg',
      buttons: [
        { text: 'LEARN MORE', link: '#' }
      ]
    }
  ];
}