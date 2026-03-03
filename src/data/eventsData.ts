import diwaliImg from '@/assets/diwali-varanasi.jpg';
import pushkarImg from '@/assets/pushkar-fair.jpg';
import konarkDanceImg from '@/assets/konark-dance.jpg';
import holiImg from '@/assets/holi-festival.jpg';
import navratriImg from '@/assets/navratri.jpg';
import pongalImg from '@/assets/pongal.jpg';
import durgaPujaImg from '@/assets/durga-puja.jpg';
import festivalImg from '@/assets/festival.jpg';
import hampiImg from '@/assets/hampi.jpg';
import jaipurImg from '@/assets/jaipur-city.jpg';
import tajMahalImg from '@/assets/taj-mahal.jpg';
import kaziranga from '@/assets/kaziranga.jpg';
import valleyImg from '@/assets/valley-of-flowers.jpg';
import redFortImg from '@/assets/red-fort.jpg';

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
    id: 'republic-day-2026',
    name: 'Republic Day Parade',
    date: '2026-01-26',
    location: 'Kartavya Path, New Delhi',
    description: 'India\'s grand military and cultural parade showcasing the nation\'s diversity, defence capabilities, and tableaux from every state along the iconic Kartavya Path.',
    image: redFortImg,
    category: 'National Event',
    ticketPrice: 500
  },
  {
    id: 'vasant-panchami-2026',
    name: 'Vasant Panchami',
    date: '2026-02-01',
    location: 'Varanasi & Pan-India',
    description: 'The festival of spring dedicated to Goddess Saraswati, celebrated with music, art, and yellow attire symbolizing the mustard fields in bloom.',
    image: festivalImg,
    category: 'Festival',
    ticketPrice: 0
  },
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
    id: 'baisakhi-2026',
    name: 'Baisakhi',
    date: '2026-04-13',
    location: 'Golden Temple, Amritsar, Punjab',
    description: 'Punjabi New Year and harvest festival celebrated with vibrant Bhangra, langars (community meals), and processions at the Golden Temple.',
    image: festivalImg,
    category: 'Harvest Festival',
    ticketPrice: 0
  },
  {
    id: 'rath-yatra-2026',
    name: 'Rath Yatra',
    date: '2026-06-28',
    location: 'Jagannath Puri, Odisha',
    description: 'The grand chariot festival of Lord Jagannath where massive, elaborately decorated chariots are pulled through the streets by thousands of devotees.',
    image: konarkDanceImg,
    category: 'Festival',
    ticketPrice: 0
  },
  {
    id: 'hemis-festival-2026',
    name: 'Hemis Festival',
    date: '2026-07-08',
    location: 'Hemis Monastery, Ladakh',
    description: 'Ladakh\'s biggest monastic festival celebrating Guru Padmasambhava with masked Cham dances, thangka displays, and traditional music at 3,600m altitude.',
    image: valleyImg,
    category: 'Cultural Festival',
    ticketPrice: 800
  },
  {
    id: 'independence-day-2026',
    name: 'Independence Day Celebrations',
    date: '2026-08-15',
    location: 'Red Fort, New Delhi',
    description: 'India\'s Independence Day celebrations with the Prime Minister\'s address at Red Fort, flag hoisting, cultural programs, and patriotic fervor across the nation.',
    image: redFortImg,
    category: 'National Event',
    ticketPrice: 0
  },
  {
    id: 'onam-2026',
    name: 'Onam Festival',
    date: '2026-08-28',
    location: 'Kochi, Kerala',
    description: 'Kerala\'s ten-day harvest festival featuring elaborate floral carpets (Pookalam), snake boat races (Vallam Kali), Onasadya feast, and Kathakali performances.',
    image: festivalImg,
    category: 'Harvest Festival',
    ticketPrice: 1500
  },
  {
    id: 'ganesh-chaturthi-2026',
    name: 'Ganesh Chaturthi',
    date: '2026-09-14',
    location: 'Mumbai, Maharashtra',
    description: 'Mumbai\'s spectacular 10-day celebration of Lord Ganesha with grand pandals, immense artistic idols, processions, and the iconic Visarjan immersion ceremony.',
    image: festivalImg,
    category: 'Festival',
    ticketPrice: 0
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
    id: 'dussehra-2026',
    name: 'Dussehra - Mysuru Dasara',
    date: '2026-10-12',
    location: 'Mysuru, Karnataka',
    description: 'Mysuru\'s royal Dasara celebration with the illuminated palace, grand Jamboo Savari elephant procession, cultural shows, and the Torchlight Parade.',
    image: hampiImg,
    category: 'Festival',
    ticketPrice: 1000
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
    id: 'rann-utsav-2026',
    name: 'Rann Utsav',
    date: '2026-11-15',
    location: 'Rann of Kutch, Gujarat',
    description: 'A three-month cultural extravaganza on the white salt desert featuring folk music, handicraft exhibitions, adventure sports, and stunning full-moon nights.',
    image: tajMahalImg,
    category: 'Cultural Festival',
    ticketPrice: 1800
  },
  {
    id: 'hornbill-2026',
    name: 'Hornbill Festival',
    date: '2026-12-01',
    location: 'Kisama Heritage Village, Nagaland',
    description: 'The "Festival of Festivals" showcasing the cultural heritage of all Naga tribes through traditional dances, music, crafts, indigenous games, and Naga cuisine.',
    image: festivalImg,
    category: 'Cultural Festival',
    ticketPrice: 1200
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
  },
  {
    id: 'jaipur-lit-fest-2026',
    name: 'Jaipur Literature Festival',
    date: '2026-12-15',
    location: 'Diggi Palace, Jaipur, Rajasthan',
    description: 'The world\'s largest free literary festival bringing together authors, thinkers, and speakers from across the globe in the heart of the Pink City.',
    image: jaipurImg,
    category: 'Literary Festival',
    ticketPrice: 0
  },
  {
    id: 'wildlife-week-2026',
    name: 'National Wildlife Week',
    date: '2026-10-02',
    location: 'Kaziranga National Park, Assam',
    description: 'A week-long celebration of India\'s incredible biodiversity with guided safari tours, wildlife photography workshops, and conservation awareness programs.',
    image: kaziranga,
    category: 'Nature Event',
    ticketPrice: 2000
  }
];
