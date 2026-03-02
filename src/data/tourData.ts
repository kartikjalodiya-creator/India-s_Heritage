import ramMandir from '@/assets/ram-mandir.jpg';
import hampi from '@/assets/hampi.jpg';
import ajanta from '@/assets/ajanta.jpg';
import tajMahal from '@/assets/taj-mahal.jpg';
import kaziranga from '@/assets/kaziranga.jpg';
import kangchenjunga from '@/assets/kangchenjunga.jpg';

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

export const tourPlans: TourPlan[] = [
  {
    id: 'golden-triangle',
    name: 'Golden Triangle',
    description: 'Experience the best of North India covering Delhi, Agra, and Jaipur. Visit iconic monuments like Taj Mahal, Red Fort, and Hawa Mahal.',
    duration: '6 Days / 5 Nights',
    sites: ['Taj Mahal', 'Agra Fort', 'Red Fort', 'Jaipur City', 'Qutub Minar'],
    image: tajMahal,
    price: 45000,
    bestSeason: 'October - March'
  },
  {
    id: 'spiritual-trail',
    name: 'Spiritual Heritage Trail',
    description: 'Visit India\'s most sacred sites from Ayodhya\'s Ram Mandir to Varanasi\'s ghats and ancient Buddhist monasteries.',
    duration: '7 Days / 6 Nights',
    sites: ['Ram Mandir', 'Nalanda Mahavihara', 'Konark Sun Temple', 'Varanasi'],
    image: ramMandir,
    price: 42000,
    bestSeason: 'October - March'
  },
  {
    id: 'south-temple-trail',
    name: 'South Indian Temple Trail',
    description: 'Discover the architectural marvels of South India\'s ancient temples, from Hampi to the Great Living Chola Temples.',
    duration: '8 Days / 7 Nights',
    sites: ['Hampi', 'Great Living Chola Temples', 'Khajuraho', 'Ellora Caves'],
    image: hampi,
    price: 55000,
    bestSeason: 'November - February'
  },
  {
    id: 'buddhist-circuit',
    name: 'Buddhist Circuit',
    description: 'Walk the path of enlightenment through ancient Buddhist caves, stupas, and university ruins.',
    duration: '7 Days / 6 Nights',
    sites: ['Ajanta Caves', 'Ellora Caves', 'Nalanda Mahavihara', 'Bhimbetka'],
    image: ajanta,
    price: 48000,
    bestSeason: 'October - March'
  },
  {
    id: 'wildlife-expedition',
    name: 'Wildlife & Nature Expedition',
    description: 'Explore India\'s natural heritage from rhino sanctuaries to mangrove forests and alpine meadows.',
    duration: '10 Days / 9 Nights',
    sites: ['Kaziranga National Park', 'Sundarbans', 'Western Ghats', 'Valley of Flowers'],
    image: kaziranga,
    price: 65000,
    bestSeason: 'November - April'
  },
  {
    id: 'himalayan-heritage',
    name: 'Himalayan Heritage Trek',
    description: 'Experience the sacred peaks, alpine biodiversity, and cultural richness of India\'s Himalayan heritage sites.',
    duration: '9 Days / 8 Nights',
    sites: ['Kangchenjunga National Park', 'Great Himalayan National Park', 'Valley of Flowers'],
    image: kangchenjunga,
    price: 72000,
    bestSeason: 'March - June'
  }
];
