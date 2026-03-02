import brassDiyaImg from '@/assets/brass-diya.jpg';
import pashminaImg from '@/assets/pashmina-shawl.jpg';
import woodenElephantImg from '@/assets/wooden-elephant.jpg';
import bluePotteryImg from '@/assets/blue-pottery.jpg';
import madhubaniImg from '@/assets/madhubani-art.jpg';
import bidriBoxImg from '@/assets/bidri-box.jpg';

export interface Souvenir {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  artisan: string;
  origin: string;
}

export const souvenirs: Souvenir[] = [
  {
    id: 'brass-lamp',
    name: 'Traditional Brass Diya',
    price: 1299,
    image: brassDiyaImg,
    description: 'Handcrafted brass oil lamp with intricate peacock design',
    category: 'Decor',
    artisan: 'Moradabad Craftsmen',
    origin: 'Uttar Pradesh'
  },
  {
    id: 'pashmina-shawl',
    name: 'Kashmiri Pashmina Shawl',
    price: 8999,
    image: pashminaImg,
    description: 'Authentic handwoven pashmina with traditional embroidery',
    category: 'Textiles',
    artisan: 'Kashmir Weavers',
    origin: 'Kashmir'
  },
  {
    id: 'wooden-elephant',
    name: 'Sandalwood Carved Elephant',
    price: 2499,
    image: woodenElephantImg,
    description: 'Intricately carved sandalwood elephant figurine',
    category: 'Sculpture',
    artisan: 'Mysore Artisans',
    origin: 'Karnataka'
  },
  {
    id: 'blue-pottery',
    name: 'Jaipur Blue Pottery Vase',
    price: 1899,
    image: bluePotteryImg,
    description: 'Traditional blue pottery vase with Persian-inspired patterns',
    category: 'Pottery',
    artisan: 'Jaipur Potters',
    origin: 'Rajasthan'
  },
  {
    id: 'madhubani-art',
    name: 'Madhubani Painting',
    price: 3499,
    image: madhubaniImg,
    description: 'Authentic hand-painted Madhubani artwork on handmade paper',
    category: 'Art',
    artisan: 'Bihar Artists',
    origin: 'Bihar'
  },
  {
    id: 'bidri-box',
    name: 'Bidriware Jewelry Box',
    price: 4299,
    image: bidriBoxImg,
    description: 'Black metal box with silver inlay work',
    category: 'Decor',
    artisan: 'Bidar Craftsmen',
    origin: 'Karnataka'
  }
];
