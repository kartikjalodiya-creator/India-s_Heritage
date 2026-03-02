import ramMandir from '@/assets/ram-mandir.jpg';
import hampi from '@/assets/hampi.jpg';
import konark from '@/assets/konark.jpg';
import ajanta from '@/assets/ajanta.jpg';
import diwaliImg from '@/assets/diwali-varanasi.jpg';
import pushkarImg from '@/assets/pushkar-fair.jpg';
import konarkDanceImg from '@/assets/konark-dance.jpg';
import brassDiyaImg from '@/assets/brass-diya.jpg';
import pashminaImg from '@/assets/pashmina-shawl.jpg';
import woodenElephantImg from '@/assets/wooden-elephant.jpg';
import bluePotteryImg from '@/assets/blue-pottery.jpg';
import madhubaniImg from '@/assets/madhubani-art.jpg';
import bidriBoxImg from '@/assets/bidri-box.jpg';

export interface HeritageSite {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  videoUrl: string;
  lat: number;
  lng: number;
  bestTime: string;
  crowdLevel: 'Low' | 'Medium' | 'High';
  weather: string;
  category: string;
}

export interface TourPlan {
  id: string;
  name: string;
  description: string;
  duration: string;
  sites: string[];
  image: string;
  price: number;
  bestSeason: string;
}

export interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  image: string;
  category: string;
  ticketPrice: number;
}

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

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  coverImage: string;
  category: string;
  date: string;
  likes: number;
  comments: { id: string; author: string; text: string; date: string }[];
}

export const heritageSites: HeritageSite[] = [
  {
    id: 'ram-mandir',
    name: 'Ram Mandir',
    location: 'Ayodhya, Uttar Pradesh',
    description: 'The grand Ram Mandir in Ayodhya, a magnificent temple dedicated to Lord Ram built in Nagara style architecture, symbolizing India\'s spiritual heritage.',
    image: ramMandir,
    videoUrl: 'https://www.youtube.com/watch?v=8HV1JVgqPM0',
    lat: 26.7922,
    lng: 82.1998,
    bestTime: 'October to March',
    crowdLevel: 'High',
    weather: 'Pleasant, 15-25°C',
    category: 'Temple Architecture'
  },
  {
    id: 'hampi',
    name: 'Hampi',
    location: 'Karnataka',
    description: 'Ancient ruins of the Vijayanagara Empire, featuring stunning temple complexes, royal enclosures, and monolithic sculptures.',
    image: hampi,
    videoUrl: 'https://www.youtube.com/watch?v=5JAnO6x_H4c',
    lat: 15.3350,
    lng: 76.4600,
    bestTime: 'November to February',
    crowdLevel: 'Medium',
    weather: 'Warm, 20-30°C',
    category: 'Ancient Ruins'
  },
  {
    id: 'konark',
    name: 'Konark Sun Temple',
    location: 'Odisha',
    description: 'A 13th-century temple dedicated to the Sun God, designed as a massive chariot with elaborately carved stone wheels.',
    image: konark,
    videoUrl: 'https://www.youtube.com/watch?v=XgG2J91K3dY',
    lat: 19.8876,
    lng: 86.0945,
    bestTime: 'October to March',
    crowdLevel: 'Low',
    weather: 'Comfortable, 18-28°C',
    category: 'Temple Architecture'
  },
  {
    id: 'ajanta',
    name: 'Ajanta Caves',
    location: 'Maharashtra',
    description: 'Rock-cut Buddhist cave monuments dating from the 2nd century BCE, featuring paintings depicting the Jataka tales.',
    image: ajanta,
    videoUrl: 'https://www.youtube.com/watch?v=EqcLmzfUaBg',
    lat: 20.5519,
    lng: 75.7033,
    bestTime: 'November to March',
    crowdLevel: 'Medium',
    weather: 'Mild, 15-25°C',
    category: 'Buddhist Heritage'
  }
];

export const tourPlans: TourPlan[] = [
  {
    id: 'golden-triangle',
    name: 'Golden Triangle',
    description: 'Experience the best of North India covering Delhi, Agra, and Jaipur. Visit iconic monuments, bustling bazaars, and royal palaces.',
    duration: '6 Days / 5 Nights',
    sites: ['Ram Mandir', 'Amber Fort', 'Qutub Minar', 'Hawa Mahal'],
    image: ramMandir,
    price: 45000,
    bestSeason: 'October - March'
  },
  {
    id: 'south-temple-trail',
    name: 'South Indian Temple Trail',
    description: 'Discover the architectural marvels of South India\'s ancient temples, from Hampi to Madurai.',
    duration: '8 Days / 7 Nights',
    sites: ['Hampi', 'Madurai Meenakshi', 'Thanjavur', 'Mahabalipuram'],
    image: hampi,
    price: 55000,
    bestSeason: 'November - February'
  },
  {
    id: 'buddhist-circuit',
    name: 'Buddhist Circuit',
    description: 'Walk the path of enlightenment through ancient Buddhist sites including caves, stupas, and monasteries.',
    duration: '7 Days / 6 Nights',
    sites: ['Ajanta Caves', 'Ellora Caves', 'Sanchi Stupa', 'Sarnath'],
    image: ajanta,
    price: 48000,
    bestSeason: 'October - March'
  }
];

export const events: Event[] = [
  {
    id: 'diwali-2026',
    name: 'Diwali Festival Celebration',
    date: '2026-10-20',
    location: 'Varanasi, Uttar Pradesh',
    description: 'Experience the magical Festival of Lights on the ghats of Varanasi with spectacular lamp ceremonies and fireworks.',
    image: diwaliImg,
    category: 'Festival',
    ticketPrice: 2500
  },
  {
    id: 'pushkar-fair-2026',
    name: 'Pushkar Camel Fair',
    date: '2026-11-03',
    location: 'Pushkar, Rajasthan',
    description: 'One of the world\'s largest camel fairs featuring cultural performances, competitions, and traditional crafts.',
    image: pushkarImg,
    category: 'Fair',
    ticketPrice: 1500
  },
  {
    id: 'konark-dance-2026',
    name: 'Konark Dance Festival',
    date: '2026-12-01',
    location: 'Konark, Odisha',
    description: 'Classical dance festival held against the backdrop of the magnificent Sun Temple, featuring Odissi and other dance forms.',
    image: konarkDanceImg,
    category: 'Dance Festival',
    ticketPrice: 3000
  }
];

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

export const blogPosts: BlogPost[] = [
  {
    id: 'mughal-architecture',
    title: 'The Timeless Beauty of Mughal Architecture',
    excerpt: 'Exploring the intricate craftsmanship and symmetry that defines India\'s Mughal heritage.',
    content: 'The Mughal era left an indelible mark on India\'s architectural landscape...',
    author: { name: 'Priya Sharma', avatar: 'https://i.pravatar.cc/150?img=1' },
    coverImage: ramMandir,
    category: 'Architecture',
    date: '2026-01-15',
    likes: 234,
    comments: [
      { id: '1', author: 'Rahul', text: 'Beautiful article!', date: '2026-01-16' }
    ]
  },
  {
    id: 'classical-dance',
    title: 'Classical Dances of India: A Living Heritage',
    excerpt: 'From Bharatanatyam to Kathak, discover the stories told through movement.',
    content: 'India\'s classical dance forms are not merely performances...',
    author: { name: 'Ananya Patel', avatar: 'https://i.pravatar.cc/150?img=2' },
    coverImage: konarkDanceImg,
    category: 'Dance',
    date: '2026-01-20',
    likes: 189,
    comments: []
  },
  {
    id: 'temple-traditions',
    title: 'Sacred Rituals: Temple Traditions of South India',
    excerpt: 'Understanding the spiritual significance of daily temple ceremonies.',
    content: 'Every morning, as the first rays of sun touch the gopuram...',
    author: { name: 'Venkat Rao', avatar: 'https://i.pravatar.cc/150?img=3' },
    coverImage: hampi,
    category: 'Spirituality',
    date: '2026-01-25',
    likes: 156,
    comments: []
  }
];
