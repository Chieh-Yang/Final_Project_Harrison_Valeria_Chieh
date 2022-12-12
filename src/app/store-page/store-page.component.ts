import { Component } from '@angular/core';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent {
  database = [{
    title: "Blue Puya",
    url: "https://www.picturethisai.com/wiki-image/1080/7B9D112ACB3342BB88979DCC475E370F.jpeg",
    cost: 5,
    description: "Does best in full sun and is drought tolerant once established. Attracts nectar feeding birds and bees."
  },{
    title: "Parrots Beak",
    url: "https://www.gardenia.net/storage/app/public/uploads/images/detail/37172520_mOptimized.webp",
    cost: 7.5,
    description: "Features. A heat tolerant spreader that creates a cooling mat of fine, silvery gray foliage. Bright, beak-like blooms nestle amongst the foliage with striking yet, beautiful contrast"
  },{
    title: "Queen of the night",
    url: "https://www.littleyellowwheelbarrow.com/wp-content/uploads/2022/03/queen-of-the-night-plant-flowers-2-scaled.jpg",
    cost: 8,
    description: "The Queen of the Night flower originates from Mexico and South America and is a jungle cactus. This night-blooming orchid is known for its sweet fragrance and lily-white flowers"
  },{
    title: "Darwins Slippers",
    url: "http://www.strangewonderfulthings.com/Calceolaria_uniflora_darwinii_Steve_Cook.jpg",
    cost: 10,
    description: "It is an evergreen, perennial species that makes a rosette of small, tongue-shaped leaves. Over time the plant multiplies into a small colony. The genus name Calceolaria means little shoe, referring to the slipper-shaped blooms. These unusual flowers appear throughout the summer"
  }]

  buyEvent(e: string): string{
    alert("Bought a thing: "+e)
    return e

  }

}
