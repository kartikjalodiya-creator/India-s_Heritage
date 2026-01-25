import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Image, ThumbsUp, MessageCircle, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import hampi from '@/assets/hampi.jpg';
import konark from '@/assets/konark.jpg';
import ajanta from '@/assets/ajanta.jpg';
import festival from '@/assets/festival.jpg';

const mockUploads = [
  { id: '1', image: hampi, author: 'Rahul S.', likes: 156, comments: 23 },
  { id: '2', image: konark, author: 'Priya M.', likes: 234, comments: 45 },
  { id: '3', image: ajanta, author: 'Vikram K.', likes: 189, comments: 34 },
  { id: '4', image: festival, author: 'Ananya R.', likes: 312, comments: 67 },
];

const Community = () => {
  const { isAuthenticated } = useApp();
  const navigate = useNavigate();
  const [uploads] = useState(mockUploads);

  const handleUpload = () => {
    if (!isAuthenticated) {
      navigate('/auth', { state: { returnTo: '/community' } });
      return;
    }
    alert('Upload feature - In a real app, this would open a file picker');
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {uploads.map((item, index) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="heritage-card overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img src={item.image} alt="Community upload" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-4">
                  <p className="font-medium text-sm mb-2">By {item.author}</p>
                  <div className="flex items-center gap-4 text-muted-foreground text-sm">
                    <button className="flex items-center gap-1 hover:text-secondary transition-colors"><ThumbsUp className="h-4 w-4" />{item.likes}</button>
                    <button className="flex items-center gap-1 hover:text-secondary transition-colors"><MessageCircle className="h-4 w-4" />{item.comments}</button>
                  </div>
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
