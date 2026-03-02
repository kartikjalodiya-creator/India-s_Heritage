import ramMandir from '@/assets/ram-mandir.jpg';
import hampi from '@/assets/hampi.jpg';
import konark from '@/assets/konark.jpg';
import ajanta from '@/assets/ajanta.jpg';
import tajMahal from '@/assets/taj-mahal.jpg';
import agraFort from '@/assets/agra-fort.jpg';
import elloraCaves from '@/assets/ellora-caves.jpg';
import elephantaCaves from '@/assets/elephanta-caves.jpg';
import cholaTemple from '@/assets/chola-temple.jpg';
import khajuraho from '@/assets/khajuraho.jpg';
import chittorgarh from '@/assets/chittorgarh.jpg';
import goaChurches from '@/assets/goa-churches.jpg';
import dholavira from '@/assets/dholavira.jpg';
import nalanda from '@/assets/nalanda.jpg';
import bhimbetka from '@/assets/bhimbetka.jpg';
import humayunsTomb from '@/assets/humayuns-tomb.jpg';
import qutubMinar from '@/assets/qutub-minar.jpg';
import redFort from '@/assets/red-fort.jpg';
import ahmedabad from '@/assets/ahmedabad.jpg';
import jaipurCity from '@/assets/jaipur-city.jpg';
import kaziranga from '@/assets/kaziranga.jpg';
import sundarbans from '@/assets/sundarbans.jpg';
import westernGhats from '@/assets/western-ghats.jpg';
import valleyOfFlowers from '@/assets/valley-of-flowers.jpg';
import greatHimalayan from '@/assets/great-himalayan.jpg';
import kangchenjunga from '@/assets/kangchenjunga.jpg';

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
  type: 'Cultural' | 'Natural' | 'Mixed';
}

export const heritageSites: HeritageSite[] = [
  // ===== CULTURAL HERITAGE SITES =====
  {
    id: 'ram-mandir',
    name: 'Ram Mandir',
    location: 'Ayodhya, Uttar Pradesh',
    description: 'The grand Ram Mandir in Ayodhya, a magnificent temple dedicated to Lord Ram built in Nagara style architecture, symbolizing India\'s spiritual heritage.',
    image: ramMandir,
    videoUrl: 'https://www.youtube.com/watch?v=8HV1JVgqPM0',
    lat: 26.7922, lng: 82.1998,
    bestTime: 'October to March',
    crowdLevel: 'High',
    weather: 'Pleasant, 15-25°C',
    category: 'Temple Architecture',
    type: 'Cultural'
  },
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    location: 'Agra, Uttar Pradesh',
    description: 'An iconic 17th-century white marble mausoleum built by Mughal Emperor Shah Jahan, widely recognized as the jewel of Muslim art and one of the universally admired masterpieces of the world.',
    image: tajMahal,
    videoUrl: 'https://www.youtube.com/watch?v=49HTIoCo4mY',
    lat: 27.1751, lng: 78.0421,
    bestTime: 'October to March',
    crowdLevel: 'High',
    weather: 'Cool, 10-25°C',
    category: 'Mughal Architecture',
    type: 'Cultural'
  },
  {
    id: 'agra-fort',
    name: 'Agra Fort',
    location: 'Agra, Uttar Pradesh',
    description: 'A massive red sandstone fortress and UNESCO World Heritage Site, serving as the main residence of Mughal emperors until 1638. Features stunning palaces, audience halls, and mosques.',
    image: agraFort,
    videoUrl: 'https://www.youtube.com/watch?v=K5ZGz5rS5D4',
    lat: 27.1795, lng: 78.0211,
    bestTime: 'October to March',
    crowdLevel: 'High',
    weather: 'Cool, 10-25°C',
    category: 'Mughal Architecture',
    type: 'Cultural'
  },
  {
    id: 'hampi',
    name: 'Group of Monuments at Hampi',
    location: 'Karnataka',
    description: 'Ruins of the last great Hindu kingdom of Vijayanagara, featuring stunning temple complexes, royal enclosures, and monolithic sculptures spread across a surreal boulder-strewn landscape.',
    image: hampi,
    videoUrl: 'https://www.youtube.com/watch?v=5JAnO6x_H4c',
    lat: 15.3350, lng: 76.4600,
    bestTime: 'November to February',
    crowdLevel: 'Medium',
    weather: 'Warm, 20-30°C',
    category: 'Ancient Ruins',
    type: 'Cultural'
  },
  {
    id: 'konark',
    name: 'Sun Temple, Konârak',
    location: 'Odisha',
    description: 'A 13th-century temple dedicated to the Sun God, designed as a colossal chariot with 12 pairs of elaborately carved stone wheels, drawn by seven horses.',
    image: konark,
    videoUrl: 'https://www.youtube.com/watch?v=XgG2J91K3dY',
    lat: 19.8876, lng: 86.0945,
    bestTime: 'October to March',
    crowdLevel: 'Low',
    weather: 'Comfortable, 18-28°C',
    category: 'Temple Architecture',
    type: 'Cultural'
  },
  {
    id: 'ajanta',
    name: 'Ajanta Caves',
    location: 'Maharashtra',
    description: 'Rock-cut Buddhist cave monuments dating from the 2nd century BCE, featuring masterpiece paintings depicting the Jataka tales and intricate sculptures.',
    image: ajanta,
    videoUrl: 'https://www.youtube.com/watch?v=EqcLmzfUaBg',
    lat: 20.5519, lng: 75.7033,
    bestTime: 'November to March',
    crowdLevel: 'Medium',
    weather: 'Mild, 15-25°C',
    category: 'Buddhist Heritage',
    type: 'Cultural'
  },
  {
    id: 'ellora-caves',
    name: 'Ellora Caves',
    location: 'Maharashtra',
    description: 'A UNESCO World Heritage complex of 34 rock-cut caves featuring Buddhist, Hindu, and Jain monuments, including the magnificent Kailasa Temple carved from a single rock.',
    image: elloraCaves,
    videoUrl: 'https://www.youtube.com/watch?v=YU5oZ-BcLIE',
    lat: 20.0258, lng: 75.1780,
    bestTime: 'November to March',
    crowdLevel: 'Medium',
    weather: 'Mild, 15-28°C',
    category: 'Buddhist Heritage',
    type: 'Cultural'
  },
  {
    id: 'elephanta-caves',
    name: 'Elephanta Caves',
    location: 'Mumbai, Maharashtra',
    description: 'Ancient rock-cut cave temples on Elephanta Island dedicated to Lord Shiva, featuring the iconic 20-foot Trimurti sculpture representing the three aspects of Shiva.',
    image: elephantaCaves,
    videoUrl: 'https://www.youtube.com/watch?v=JpVm6V3y-WE',
    lat: 18.9633, lng: 72.9315,
    bestTime: 'November to February',
    crowdLevel: 'Medium',
    weather: 'Tropical, 22-32°C',
    category: 'Ancient Ruins',
    type: 'Cultural'
  },
  {
    id: 'chola-temples',
    name: 'Great Living Chola Temples',
    location: 'Tamil Nadu',
    description: 'A group of 11th-12th century Dravidian temples built by the Chola dynasty, including the Brihadeeswarar Temple in Thanjavur — a masterpiece of Tamil architecture.',
    image: cholaTemple,
    videoUrl: 'https://www.youtube.com/watch?v=3U_xFfhbHY0',
    lat: 10.7828, lng: 79.1318,
    bestTime: 'October to March',
    crowdLevel: 'Medium',
    weather: 'Warm, 24-34°C',
    category: 'Temple Architecture',
    type: 'Cultural'
  },
  {
    id: 'khajuraho',
    name: 'Khajuraho Group of Monuments',
    location: 'Madhya Pradesh',
    description: 'A group of Hindu and Jain temples famous for their Nagara-style architecture and exquisite erotic sculptures, representing the pinnacle of medieval Indian art.',
    image: khajuraho,
    videoUrl: 'https://www.youtube.com/watch?v=mLdsBXfJJrs',
    lat: 24.8318, lng: 79.9199,
    bestTime: 'October to March',
    crowdLevel: 'Medium',
    weather: 'Pleasant, 12-28°C',
    category: 'Temple Architecture',
    type: 'Cultural'
  },
  {
    id: 'hill-forts-rajasthan',
    name: 'Hill Forts of Rajasthan',
    location: 'Rajasthan',
    description: 'Six majestic hill forts including Chittorgarh, Kumbhalgarh, and Amer Fort, representing Rajput military architecture spanning 5th-18th centuries across the Aravalli ranges.',
    image: chittorgarh,
    videoUrl: 'https://www.youtube.com/watch?v=gC5z3M2YY90',
    lat: 24.8879, lng: 74.6454,
    bestTime: 'October to March',
    crowdLevel: 'High',
    weather: 'Cool, 10-25°C',
    category: 'Forts & Palaces',
    type: 'Cultural'
  },
  {
    id: 'goa-churches',
    name: 'Churches and Convents of Goa',
    location: 'Old Goa, Goa',
    description: 'A collection of Portuguese-era churches and convents including the Basilica of Bom Jesus housing the remains of St. Francis Xavier, showcasing Baroque architecture.',
    image: goaChurches,
    videoUrl: 'https://www.youtube.com/watch?v=7fO5Gxuz5TQ',
    lat: 15.5009, lng: 73.9116,
    bestTime: 'November to February',
    crowdLevel: 'Medium',
    weather: 'Tropical, 22-33°C',
    category: 'Colonial Heritage',
    type: 'Cultural'
  },
  {
    id: 'dholavira',
    name: 'Dholavira (Harappan City)',
    location: 'Gujarat',
    description: 'One of the five largest Harappan sites and most prominent archaeological site belonging to the Indus Valley Civilization, dating back to 3000 BCE with remarkable urban planning.',
    image: dholavira,
    videoUrl: 'https://www.youtube.com/watch?v=Jj_VQJXqN4s',
    lat: 23.8876, lng: 70.2086,
    bestTime: 'November to February',
    crowdLevel: 'Low',
    weather: 'Arid, 15-30°C',
    category: 'Archaeological Sites',
    type: 'Cultural'
  },
  {
    id: 'nalanda',
    name: 'Nalanda Mahavihara',
    location: 'Bihar',
    description: 'Ruins of the ancient Buddhist university and monastery, one of the greatest centers of learning in the ancient world, active from the 5th to 12th century CE.',
    image: nalanda,
    videoUrl: 'https://www.youtube.com/watch?v=L_xPZqF5g1Y',
    lat: 25.1357, lng: 85.4427,
    bestTime: 'October to March',
    crowdLevel: 'Low',
    weather: 'Pleasant, 12-25°C',
    category: 'Buddhist Heritage',
    type: 'Cultural'
  },
  {
    id: 'bhimbetka',
    name: 'Rock Shelters of Bhimbetka',
    location: 'Madhya Pradesh',
    description: 'Prehistoric rock shelters exhibiting the earliest traces of human life in India, with cave paintings dating back approximately 30,000 years.',
    image: bhimbetka,
    videoUrl: 'https://www.youtube.com/watch?v=pT6vQFVZZS4',
    lat: 22.9371, lng: 77.6120,
    bestTime: 'October to March',
    crowdLevel: 'Low',
    weather: 'Pleasant, 15-28°C',
    category: 'Archaeological Sites',
    type: 'Cultural'
  },
  {
    id: 'humayuns-tomb',
    name: "Humayun's Tomb",
    location: 'New Delhi',
    description: 'The tomb of Mughal Emperor Humayun, built in 1570, pioneering the concept of garden tombs that later inspired the Taj Mahal.',
    image: humayunsTomb,
    videoUrl: 'https://www.youtube.com/watch?v=qG_qFJuQ1O0',
    lat: 28.5933, lng: 77.2507,
    bestTime: 'October to March',
    crowdLevel: 'Medium',
    weather: 'Cool, 8-22°C',
    category: 'Mughal Architecture',
    type: 'Cultural'
  },
  {
    id: 'qutub-minar',
    name: 'Qutub Minar',
    location: 'New Delhi',
    description: 'A soaring 73-meter red sandstone tower built in 1193, the tallest brick minaret in the world and a masterpiece of Indo-Islamic architecture.',
    image: qutubMinar,
    videoUrl: 'https://www.youtube.com/watch?v=3eNp1B9V3Qo',
    lat: 28.5245, lng: 77.1855,
    bestTime: 'October to March',
    crowdLevel: 'High',
    weather: 'Cool, 8-22°C',
    category: 'Mughal Architecture',
    type: 'Cultural'
  },
  {
    id: 'red-fort',
    name: 'Red Fort',
    location: 'New Delhi',
    description: 'The magnificent Red Fort Complex built by Shah Jahan in 1648, served as the main residence of Mughal emperors and symbol of India\'s independence.',
    image: redFort,
    videoUrl: 'https://www.youtube.com/watch?v=MaZX-9qCuIk',
    lat: 28.6562, lng: 77.2410,
    bestTime: 'October to March',
    crowdLevel: 'High',
    weather: 'Cool, 8-22°C',
    category: 'Forts & Palaces',
    type: 'Cultural'
  },
  {
    id: 'ahmedabad',
    name: 'Historic City of Ahmadabad',
    location: 'Gujarat',
    description: 'Founded in the 15th century, Ahmedabad\'s walled city showcases a rich blend of Hindu, Islamic and Jain architecture with intricately carved havelis, pols and monuments.',
    image: ahmedabad,
    videoUrl: 'https://www.youtube.com/watch?v=JW8FzGLdXqY',
    lat: 23.0225, lng: 72.5714,
    bestTime: 'November to February',
    crowdLevel: 'Medium',
    weather: 'Warm, 18-30°C',
    category: 'Urban Heritage',
    type: 'Cultural'
  },
  {
    id: 'jaipur-city',
    name: 'Jaipur City',
    location: 'Rajasthan',
    description: 'India\'s first planned city, the Pink City founded in 1727 by Maharaja Sawai Jai Singh II, featuring the iconic Hawa Mahal, City Palace and Jantar Mantar.',
    image: jaipurCity,
    videoUrl: 'https://www.youtube.com/watch?v=Ld0LeyaWbfk',
    lat: 26.9124, lng: 75.7873,
    bestTime: 'October to March',
    crowdLevel: 'High',
    weather: 'Cool, 10-25°C',
    category: 'Urban Heritage',
    type: 'Cultural'
  },

  // ===== NATURAL HERITAGE SITES =====
  {
    id: 'kaziranga',
    name: 'Kaziranga National Park',
    location: 'Assam',
    description: 'Home to two-thirds of the world\'s great one-horned rhinoceroses, this park is a biodiversity hotspot in the floodplains of the Brahmaputra River.',
    image: kaziranga,
    videoUrl: 'https://www.youtube.com/watch?v=vFyBRMH9G-g',
    lat: 26.5775, lng: 93.1711,
    bestTime: 'November to April',
    crowdLevel: 'Medium',
    weather: 'Cool, 10-25°C',
    category: 'National Park',
    type: 'Natural'
  },
  {
    id: 'sundarbans',
    name: 'Sundarbans National Park',
    location: 'West Bengal',
    description: 'The largest mangrove forest in the world, home to the Royal Bengal Tiger, spanning the delta of the Ganges, Brahmaputra, and Meghna rivers.',
    image: sundarbans,
    videoUrl: 'https://www.youtube.com/watch?v=SxHKmbqE_2s',
    lat: 21.9497, lng: 89.1833,
    bestTime: 'September to March',
    crowdLevel: 'Low',
    weather: 'Tropical, 20-34°C',
    category: 'National Park',
    type: 'Natural'
  },
  {
    id: 'western-ghats',
    name: 'Western Ghats',
    location: 'Multiple States',
    description: 'Older than the Himalayas, this 1,600 km mountain chain is one of the world\'s eight hottest hotspots of biological diversity, with exceptionally high endemism.',
    image: westernGhats,
    videoUrl: 'https://www.youtube.com/watch?v=2_HXUhShhmY',
    lat: 11.1823, lng: 75.7659,
    bestTime: 'October to May',
    crowdLevel: 'Low',
    weather: 'Tropical, 18-30°C',
    category: 'Biodiversity Hotspot',
    type: 'Natural'
  },
  {
    id: 'valley-of-flowers',
    name: 'Nanda Devi & Valley of Flowers',
    location: 'Uttarakhand',
    description: 'Stunning alpine meadows of outstanding natural beauty with over 600 species of flowering plants, nestled in the western Himalayas at 3,600m altitude.',
    image: valleyOfFlowers,
    videoUrl: 'https://www.youtube.com/watch?v=z85kdOLnZRU',
    lat: 30.7280, lng: 79.6050,
    bestTime: 'July to September',
    crowdLevel: 'Low',
    weather: 'Cool, 5-17°C',
    category: 'National Park',
    type: 'Natural'
  },
  {
    id: 'great-himalayan',
    name: 'Great Himalayan National Park',
    location: 'Himachal Pradesh',
    description: 'Located in the Seraj Forest Division, this park protects outstanding biodiversity in the western part of the Himalayas with dense forests and alpine meadows.',
    image: greatHimalayan,
    videoUrl: 'https://www.youtube.com/watch?v=P3WmQvUfUyE',
    lat: 31.7600, lng: 77.5700,
    bestTime: 'March to June & Sep to Nov',
    crowdLevel: 'Low',
    weather: 'Cool, 0-20°C',
    category: 'National Park',
    type: 'Natural'
  },

  // ===== MIXED HERITAGE SITE =====
  {
    id: 'kangchenjunga',
    name: 'Kangchenjunga National Park',
    location: 'Sikkim',
    description: 'India\'s first Mixed World Heritage Site, centered around the world\'s third-highest peak, recognized for both its unique biodiversity and sacred cultural significance to the Sikkimese people.',
    image: kangchenjunga,
    videoUrl: 'https://www.youtube.com/watch?v=RN8k2GdKPCY',
    lat: 27.7025, lng: 88.1475,
    bestTime: 'March to May & Oct to Dec',
    crowdLevel: 'Low',
    weather: 'Cold, -5 to 15°C',
    category: 'National Park',
    type: 'Mixed'
  }
];
