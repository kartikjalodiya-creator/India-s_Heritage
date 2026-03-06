import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, ThumbsUp, MessageCircle, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import hampi from '@/assets/hampi.jpg';
import konark from '@/assets/konark.jpg';
import ajanta from '@/assets/ajanta.jpg';
import festival from '@/assets/festival.jpg';
import tajMahal from '@/assets/taj-mahal.jpg';
import redFort from '@/assets/red-fort.jpg';
import ellora from '@/assets/ellora-caves.jpg';
import khajuraho from '@/assets/khajuraho.jpg';
import jaipurCity from '@/assets/jaipur-city.jpg';
import westernGhats from '@/assets/western-ghats.jpg';
import cholaTemple from '@/assets/chola-temple.jpg';
import qutubMinar from '@/assets/qutub-minar.jpg';

const initialUploads = [
  { id: '1', image: hampi, author: 'Rahul S.', caption: 'Sunrise at Hampi ruins', likes: 156, comments: [{ id: 'c1', author: 'Priya', text: 'Stunning capture!' }], liked: false },
  { id: '2', image: konark, author: 'Priya M.', caption: 'The majestic Sun Temple', likes: 234, comments: [{ id: 'c2', author: 'Amit', text: 'On my bucket list!' }], liked: false },
  { id: '3', image: ajanta, author: 'Vikram K.', caption: 'Inside Ajanta Caves', likes: 189, comments: [], liked: false },
  { id: '4', image: festival, author: 'Ananya R.', caption: 'Colors of India', likes: 312, comments: [{ id: 'c3', author: 'Sneha', text: 'Love the energy!' }], liked: false },
  { id: '5', image: tajMahal, author: 'Meera D.', caption: 'Taj Mahal at golden hour', likes: 428, comments: [{ id: 'c4', author: 'Ravi', text: 'Timeless beauty' }], liked: false },
  { id: '6', image: redFort, author: 'Arjun P.', caption: 'Red Fort in monsoon', likes: 198, comments: [], liked: false },
  { id: '7', image: ellora, author: 'Kavita B.', caption: 'Kailasa Temple from above', likes: 276, comments: [{ id: 'c5', author: 'Dev', text: 'Engineering marvel!' }], liked: false },
  { id: '8', image: khajuraho, author: 'Deepak R.', caption: 'Sculptures of Khajuraho', likes: 167, comments: [], liked: false },
  { id: '9', image: jaipurCity, author: 'Sonal M.', caption: 'Pink City panorama', likes: 215, comments: [], liked: false },
  { id: '10', image: westernGhats, author: 'Ravi K.', caption: 'Misty Western Ghats trek', likes: 342, comments: [{ id: 'c6', author: 'Lata', text: 'Nature at its best' }], liked: false },
  { id: '11', image: cholaTemple, author: 'Venkat S.', caption: 'Brihadeeswara Temple', likes: 289, comments: [], liked: false },
  { id: '12', image: qutubMinar, author: 'Nisha T.', caption: 'Qutub Minar at dusk', likes: 203, comments: [{ id: 'c7', author: 'Karan', text: 'Great angle!' }], liked: false },
];

const Community = () => {
  const { isAuthenticated, user } = useApp();
  const navigate = useNavigate();
  const [uploads, setUploads] = useState(initialUploads);
  const [openComments, setOpenComments] = useState<string | null>(null);
  const [newComment, setNewComment] = useState('');

  const handleUpload = () => {
    if (!isAuthenticated) {
      navigate('/auth', { state: { returnTo: '/community' } });
      return;
    }
    alert('Upload feature - In a real app, this would open a file picker');
  };

  const handleLike = (id: string) => {
    if (!isAuthenticated) {
      navigate('/auth', { state: { returnTo: '/community' } });
      return;
    }
    setUploads(prev => prev.map(u =>
      u.id === id
        ? { ...u, liked: !u.liked, likes: u.liked ? u.likes - 1 : u.likes + 1 }
        : u
    ));
  };

  const handleAddComment = (id: string) => {
    if (!isAuthenticated) {
      navigate('/auth', { state: { returnTo: '/community' } });
      return;
    }
    if (!newComment.trim()) return;
    setUploads(prev => prev.map(u =>
      u.id === id
        ? { ...u, comments: [...u.comments, { id: Date.now().toString(), author: user?.name || 'You', text: newComment.trim() }] }
        : u
    ));
    setNewComment('');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-heritage">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-6xl font-bold mb-4">
            Community Gallery
          </motion.h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">Share your heritage experiences with fellow travelers</p>
          <Button onClick={handleUpload} className="btn-saffron"><Upload className="h-5 w-5 mr-2" />Upload Photo/Video</Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {uploads.map((item, index) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="heritage-card overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img src={item.image} alt={item.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-4">
                  <p className="font-medium text-sm">{item.caption}</p>
                  <p className="text-muted-foreground text-xs mb-2">By {item.author}</p>
                  <div className="flex items-center gap-4 text-muted-foreground text-sm">
                    <button
                      onClick={() => handleLike(item.id)}
                      className={`flex items-center gap-1 transition-colors ${item.liked ? 'text-secondary' : 'hover:text-secondary'}`}
                    >
                      <ThumbsUp className={`h-4 w-4 ${item.liked ? 'fill-current' : ''}`} />{item.likes}
                    </button>
                    <button
                      onClick={() => setOpenComments(openComments === item.id ? null : item.id)}
                      className="flex items-center gap-1 hover:text-secondary transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />{item.comments.length}
                    </button>
                  </div>

                  <AnimatePresence>
                    {openComments === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mt-3"
                      >
                        <div className="max-h-32 overflow-y-auto space-y-2 mb-2">
                          {item.comments.length === 0 && (
                            <p className="text-muted-foreground text-xs">No comments yet.</p>
                          )}
                          {item.comments.map(c => (
                            <div key={c.id} className="bg-muted rounded-md p-2">
                              <p className="text-xs font-medium">{c.author}</p>
                              <p className="text-xs text-muted-foreground">{c.text}</p>
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Input
                            value={newComment}
                            onChange={e => setNewComment(e.target.value)}
                            placeholder="Add a comment..."
                            className="text-xs h-8"
                            onKeyDown={e => e.key === 'Enter' && handleAddComment(item.id)}
                          />
                          <Button size="sm" className="h-8 px-2" onClick={() => handleAddComment(item.id)}>
                            <Send className="h-3 w-3" />
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Community;
