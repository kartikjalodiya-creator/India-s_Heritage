import diwaliImg from '@/assets/diwali-varanasi.jpg';
import pushkarImg from '@/assets/pushkar-fair.jpg';
import konarkDanceImg from '@/assets/konark-dance.jpg';
import holiImg from '@/assets/holi-festival.jpg';
import navratriImg from '@/assets/navratri.jpg';
import pongalImg from '@/assets/pongal.jpg';
import durgaPujaImg from '@/assets/durga-puja.jpg';

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

export const events: Event[] = [
  {
    id: 'holi-2026',
    name: 'Holi - Festival of Colors',
    date: '2026-03-14',
    location: 'Mathura & Vrindavan, Uttar Pradesh',
    description: 'Experience the most vibrant celebration of colors in the birthplace of Lord Krishna. Week-long festivities with Lathmar Holi, flower Holi, and grand color play.',
    image: holiImg,
    category: 'Festival',
    ticketPrice: 1800
  },
  {
    id: 'pongal-2026',
    name: 'Pongal Harvest Festival',
    date: '2026-01-14',
    location: 'Thanjavur, Tamil Nadu',
    description: 'Tamil Nadu\'s grand harvest festival celebrating the Sun God with traditional kolam, pot-boiling rituals, Jallikattu bull-taming, and temple celebrations.',
    image: pongalImg,
    category: 'Harvest Festival',
    ticketPrice: 1200
  },
  {
    id: 'navratri-2026',
    name: 'Navratri & Garba Night',
    date: '2026-10-01',
    location: 'Ahmedabad, Gujarat',
    description: 'Nine nights of devotion and dance celebrating Goddess Durga. Gujarat\'s legendary Garba and Dandiya Raas with thousands of dancers in traditional attire.',
    image: navratriImg,
    category: 'Dance Festival',
    ticketPrice: 2000
  },
  {
    id: 'durga-puja-2026',
    name: 'Durga Puja',
    date: '2026-10-10',
    location: 'Kolkata, West Bengal',
    description: 'Kolkata\'s grandest festival featuring spectacular themed pandals, artistic Durga idols, cultural performances, and the emotional Sindoor Khela and immersion.',
    image: durgaPujaImg,
    category: 'Festival',
    ticketPrice: 0
  },
  {
    id: 'diwali-2026',
    name: 'Diwali Festival Celebration',
    date: '2026-10-20',
    location: 'Varanasi, Uttar Pradesh',
    description: 'Experience the magical Festival of Lights on the ghats of Varanasi with spectacular lamp ceremonies, Dev Deepawali, and fireworks.',
    image: diwaliImg,
    category: 'Festival',
    ticketPrice: 2500
  },
  {
    id: 'pushkar-fair-2026',
    name: 'Pushkar Camel Fair',
    date: '2026-11-03',
    location: 'Pushkar, Rajasthan',
    description: 'One of the world\'s largest camel fairs featuring cultural performances, competitions, hot air balloon rides, and traditional Rajasthani crafts.',
    image: pushkarImg,
    category: 'Fair',
    ticketPrice: 1500
  },
  {
    id: 'konark-dance-2026',
    name: 'Konark Dance Festival',
    date: '2026-12-01',
    location: 'Konark, Odisha',
    description: 'Classical dance festival held against the backdrop of the magnificent Sun Temple, featuring Odissi, Bharatanatyam, Kathak, and other dance forms.',
    image: konarkDanceImg,
    category: 'Dance Festival',
    ticketPrice: 3000
  }
];
