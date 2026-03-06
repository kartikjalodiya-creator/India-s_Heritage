import guide1 from '@/assets/guides/guide-1.jpg';
import guide2 from '@/assets/guides/guide-2.jpg';
import guide3 from '@/assets/guides/guide-3.jpg';
import guide4 from '@/assets/guides/guide-4.jpg';
import guide5 from '@/assets/guides/guide-5.jpg';
import guide6 from '@/assets/guides/guide-6.jpg';
import guide7 from '@/assets/guides/guide-7.jpg';
import guide8 from '@/assets/guides/guide-8.jpg';
import guide9 from '@/assets/guides/guide-9.jpg';
import guide10 from '@/assets/guides/guide-10.jpg';

export interface TravelGuide {
  id: string;
  name: string;
  photo: string;
  specialization: string;
  region: string;
  languages: string[];
  experience: number;
  rating: number;
  reviews: number;
  bio: string;
}

export const travelGuides: TravelGuide[] = [
  {
    id: 'guide-1',
    name: 'Arjun Mehta',
    photo: guide1,
    specialization: 'Mughal Architecture & History',
    region: 'North India',
    languages: ['English', 'Hindi', 'Urdu'],
    experience: 12,
    rating: 4.9,
    reviews: 342,
    bio: 'Expert on Mughal-era monuments with deep knowledge of Taj Mahal, Agra Fort, and Delhi heritage sites.'
  },
  {
    id: 'guide-2',
    name: 'Priya Venkatesh',
    photo: guide2,
    specialization: 'Temple Architecture & Dravidian Art',
    region: 'South India',
    languages: ['English', 'Tamil', 'Kannada'],
    experience: 10,
    rating: 4.8,
    reviews: 289,
    bio: 'Specialist in South Indian temple architecture, Chola dynasty history, and Hampi ruins.'
  },
  {
    id: 'guide-3',
    name: 'Rajesh Shekhawat',
    photo: guide3,
    specialization: 'Rajput Forts & Desert Heritage',
    region: 'Rajasthan',
    languages: ['English', 'Hindi', 'Marwari'],
    experience: 15,
    rating: 4.9,
    reviews: 412,
    bio: 'Veteran guide specializing in Rajasthani forts, palaces, and the vibrant culture of the Thar Desert.'
  },
  {
    id: 'guide-4',
    name: 'Ananya Nair',
    photo: guide4,
    specialization: 'Biodiversity & Eco-Tourism',
    region: 'Western Ghats',
    languages: ['English', 'Malayalam', 'Hindi'],
    experience: 8,
    rating: 4.7,
    reviews: 198,
    bio: 'Passionate about India\'s natural heritage, specializing in Western Ghats biodiversity and eco-tourism.'
  },
  {
    id: 'guide-5',
    name: 'Devendra Pandey',
    photo: guide5,
    specialization: 'Spiritual Heritage & Pilgrimage',
    region: 'Varanasi & Central India',
    languages: ['English', 'Hindi', 'Sanskrit'],
    experience: 25,
    rating: 5.0,
    reviews: 567,
    bio: 'Renowned spiritual heritage guide with unmatched knowledge of Varanasi\'s ghats, temples, and rituals.'
  },
  {
    id: 'guide-6',
    name: 'Vikram Thapa',
    photo: guide6,
    specialization: 'Himalayan Treks & Adventure',
    region: 'Himalayas',
    languages: ['English', 'Hindi', 'Nepali'],
    experience: 11,
    rating: 4.8,
    reviews: 276,
    bio: 'Certified mountaineer and guide for Himalayan heritage treks including Valley of Flowers and Kangchenjunga.'
  },
  {
    id: 'guide-7',
    name: 'Lakshmi Pillai',
    photo: guide7,
    specialization: 'Kerala Culture & Backwaters',
    region: 'Kerala',
    languages: ['English', 'Malayalam', 'Tamil'],
    experience: 9,
    rating: 4.7,
    reviews: 215,
    bio: 'Expert in Kerala\'s unique cultural heritage, Ayurveda traditions, and backwater ecosystems.'
  },
  {
    id: 'guide-8',
    name: 'Marco D\'Souza',
    photo: guide8,
    specialization: 'Colonial Heritage & Coastal History',
    region: 'Goa & Konkan',
    languages: ['English', 'Konkani', 'Portuguese'],
    experience: 7,
    rating: 4.6,
    reviews: 164,
    bio: 'Specialist in Goa\'s Portuguese colonial heritage, old churches, and coastal cultural traditions.'
  },
  {
    id: 'guide-9',
    name: 'Kavita Rathore',
    photo: guide9,
    specialization: 'Art, Textiles & Crafts Heritage',
    region: 'Rajasthan & Gujarat',
    languages: ['English', 'Hindi', 'Gujarati'],
    experience: 13,
    rating: 4.9,
    reviews: 321,
    bio: 'Curates immersive heritage tours focused on traditional Indian crafts, textiles, and folk art forms.'
  },
  {
    id: 'guide-10',
    name: 'Bhaskar Rynjah',
    photo: guide10,
    specialization: 'Northeast Tribal Heritage',
    region: 'Northeast India',
    languages: ['English', 'Hindi', 'Khasi'],
    experience: 10,
    rating: 4.8,
    reviews: 187,
    bio: 'Deep understanding of Northeast India\'s tribal cultures, living root bridges, and Hornbill Festival traditions.'
  }
];
