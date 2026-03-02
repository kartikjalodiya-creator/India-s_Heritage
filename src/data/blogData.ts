import ramMandir from '@/assets/ram-mandir.jpg';
import konarkDanceImg from '@/assets/konark-dance.jpg';
import hampi from '@/assets/hampi.jpg';

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
