import ramMandir from '@/assets/ram-mandir.jpg';
import konarkDanceImg from '@/assets/konark-dance.jpg';
import hampi from '@/assets/hampi.jpg';
import tajMahal from '@/assets/taj-mahal.jpg';
import ajanta from '@/assets/ajanta.jpg';
import khajuraho from '@/assets/khajuraho.jpg';
import kaziranga from '@/assets/kaziranga.jpg';
import westernGhats from '@/assets/western-ghats.jpg';
import redFort from '@/assets/red-fort.jpg';
import jaipurCity from '@/assets/jaipur-city.jpg';
import kangchenjunga from '@/assets/kangchenjunga.jpg';
import ellora from '@/assets/ellora-caves.jpg';

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

export const blogPosts: BlogPost[] = [
  {
    id: 'mughal-architecture',
    title: 'The Timeless Beauty of Mughal Architecture',
    excerpt: 'Exploring the intricate craftsmanship and symmetry that defines India\'s Mughal heritage.',
    content: 'The Mughal era left an indelible mark on India\'s architectural landscape. From the Taj Mahal to Humayun\'s Tomb, these structures showcase unparalleled mastery of geometry, calligraphy, and garden design that continue to inspire architects worldwide.',
    author: { name: 'Priya Sharma', avatar: 'https://i.pravatar.cc/150?img=1' },
    coverImage: tajMahal,
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
    content: 'India\'s classical dance forms are not merely performances — they are devotional offerings, storytelling traditions, and living art forms that have survived millennia through guru-shishya parampara.',
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
    content: 'Every morning, as the first rays of sun touch the gopuram, the temple comes alive with the sound of nadaswaram and the fragrance of camphor. South Indian temples follow ancient Agama Shastra rituals unchanged for over a thousand years.',
    author: { name: 'Venkat Rao', avatar: 'https://i.pravatar.cc/150?img=3' },
    coverImage: hampi,
    category: 'Spirituality',
    date: '2026-01-25',
    likes: 156,
    comments: []
  },
  {
    id: 'cave-art-masterpieces',
    title: 'Ajanta & Ellora: India\'s Greatest Cave Art',
    excerpt: 'A journey through 2,000 years of rock-cut art, from Buddhist viharas to the monolithic Kailasa Temple.',
    content: 'The caves of Ajanta and Ellora represent the zenith of Indian rock-cut architecture. Ajanta\'s paintings, created under flickering lamplight, remain among the finest surviving examples of ancient Indian art, while Ellora\'s Kailasa Temple is carved top-down from a single basalt cliff.',
    author: { name: 'Dr. Meera Iyer', avatar: 'https://i.pravatar.cc/150?img=5' },
    coverImage: ajanta,
    category: 'Art & Heritage',
    date: '2026-02-02',
    likes: 312,
    comments: [
      { id: '2', author: 'Sneha', text: 'The detail about the painting techniques was fascinating!', date: '2026-02-03' }
    ]
  },
  {
    id: 'hampi-vijayanagara',
    title: 'Hampi: Walking Through the Ruins of an Empire',
    excerpt: 'Exploring the boulder-strewn landscape that once housed one of the world\'s richest cities.',
    content: 'At its peak in the 16th century, Vijayanagara was larger than Rome. Today, Hampi\'s ruins — scattered across 26 sq km of surreal granite boulders — tell the story of a magnificent Hindu empire that rivaled the Mughals in wealth and grandeur.',
    author: { name: 'Arjun Desai', avatar: 'https://i.pravatar.cc/150?img=7' },
    coverImage: hampi,
    category: 'History',
    date: '2026-02-10',
    likes: 278,
    comments: [
      { id: '3', author: 'Kiran', text: 'I visited Hampi last year and this captures it perfectly!', date: '2026-02-11' }
    ]
  },
  {
    id: 'khajuraho-sculptures',
    title: 'Khajuraho: Where Stone Speaks of Love and Devotion',
    excerpt: 'Decoding the symbolism behind the erotic and celestial sculptures of Khajuraho.',
    content: 'The Khajuraho temples, built by the Chandela dynasty between 950-1050 CE, are far more than their famous erotic carvings. Only 10% of the sculptures depict erotic themes — the rest portray gods, goddesses, celestial musicians, and scenes of everyday life in extraordinary detail.',
    author: { name: 'Dr. Kavita Bhatt', avatar: 'https://i.pravatar.cc/150?img=9' },
    coverImage: khajuraho,
    category: 'Architecture',
    date: '2026-02-18',
    likes: 245,
    comments: []
  },
  {
    id: 'western-ghats-biodiversity',
    title: 'Western Ghats: Older Than the Himalayas',
    excerpt: 'Why this 1,600 km mountain chain is one of the world\'s top biodiversity hotspots.',
    content: 'The Western Ghats are 150 million years old — far older than the Himalayas. This UNESCO Natural Heritage site harbors over 7,402 species of flowering plants, 1,814 species of non-flowering plants, 139 mammal species, and 508 bird species, with exceptionally high endemism.',
    author: { name: 'Ravi Kumaran', avatar: 'https://i.pravatar.cc/150?img=11' },
    coverImage: westernGhats,
    category: 'Nature',
    date: '2026-02-25',
    likes: 198,
    comments: [
      { id: '4', author: 'Deepa', text: 'We need to protect these forests at all costs.', date: '2026-02-26' }
    ]
  },
  {
    id: 'kaziranga-rhino',
    title: 'Kaziranga: Saving the One-Horned Rhinoceros',
    excerpt: 'How Assam\'s flagship national park became a conservation success story.',
    content: 'From a mere 12 rhinos in the early 1900s to over 2,600 today, Kaziranga is one of conservation\'s greatest triumphs. The park\'s floodplains along the Brahmaputra also shelter tigers, elephants, and the endangered Gangetic dolphin.',
    author: { name: 'Dr. Bibhab Talukdar', avatar: 'https://i.pravatar.cc/150?img=12' },
    coverImage: kaziranga,
    category: 'Wildlife',
    date: '2026-03-01',
    likes: 267,
    comments: []
  },
  {
    id: 'delhi-heritage-trail',
    title: 'Seven Cities of Delhi: A Heritage Walking Trail',
    excerpt: 'Tracing 1,000 years of history from the Qutub Minar to the Red Fort.',
    content: 'Delhi has been built, destroyed, and rebuilt at least seven times. This heritage trail connects the dots — from Qutub-ud-din Aibak\'s 12th-century minaret through Tughlaqabad\'s fortress-city, the elegant gardens of Humayun\'s Tomb, to Shah Jahan\'s magnificent Red Fort.',
    author: { name: 'Swapnil Kapoor', avatar: 'https://i.pravatar.cc/150?img=15' },
    coverImage: redFort,
    category: 'Travel',
    date: '2026-03-05',
    likes: 321,
    comments: [
      { id: '5', author: 'Aisha', text: 'This would make an amazing weekend itinerary!', date: '2026-03-06' }
    ]
  },
  {
    id: 'jaipur-pink-city',
    title: 'Jaipur: The Science Behind India\'s First Planned City',
    excerpt: 'How Maharaja Sawai Jai Singh II used astronomy and Vastu to design the Pink City in 1727.',
    content: 'Jaipur wasn\'t just built — it was engineered. Maharaja Sawai Jai Singh II collaborated with Bengali architect Vidyadhar Bhattacharya to create India\'s first grid-planned city, incorporating Vastu Shastra principles and dividing the city into nine blocks representing the nine divisions of the universe.',
    author: { name: 'Prof. Rajendra Singh', avatar: 'https://i.pravatar.cc/150?img=17' },
    coverImage: jaipurCity,
    category: 'Architecture',
    date: '2026-03-10',
    likes: 178,
    comments: []
  },
  {
    id: 'kangchenjunga-sacred-peak',
    title: 'Kangchenjunga: Where Nature Meets the Sacred',
    excerpt: 'India\'s first Mixed World Heritage Site — a mountain revered by Sikkimese people for centuries.',
    content: 'Kangchenjunga, the world\'s third-highest peak, is far more than a mountain to the Sikkimese. It is the guardian deity of Sikkim, home to sacred lakes, and a biodiversity treasure trove ranging from subtropical forests to arctic tundra within its boundaries.',
    author: { name: 'Tenzing Lepcha', avatar: 'https://i.pravatar.cc/150?img=19' },
    coverImage: kangchenjunga,
    category: 'Nature & Spirituality',
    date: '2026-03-15',
    likes: 145,
    comments: []
  },
  {
    id: 'ellora-kailasa',
    title: 'Kailasa Temple: The Mountain Carved Into a Temple',
    excerpt: 'The engineering marvel of Ellora\'s Cave 16, carved top-down from 200,000 tons of volcanic rock.',
    content: 'Built by Rashtrakuta king Krishna I in the 8th century, the Kailasa Temple remains one of humanity\'s most audacious architectural achievements. Workers removed an estimated 200,000 tons of rock, carving downward from the cliff top to create a freestanding temple representing Mount Kailash.',
    author: { name: 'Dr. Shailendra Pandey', avatar: 'https://i.pravatar.cc/150?img=20' },
    coverImage: ellora,
    category: 'Architecture',
    date: '2026-03-20',
    likes: 298,
    comments: [
      { id: '6', author: 'Marcus', text: 'How did they even plan something like this without modern tools?', date: '2026-03-21' }
    ]
  }
];
