import { motion } from 'framer-motion';
import { Heart, ThumbsUp, MessageCircle, Calendar, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/heritageData';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-heritage">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-6xl font-bold mb-4">
            Cultural Blogs
          </motion.h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">Stories, traditions, and insights from India's rich heritage</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article key={post.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="heritage-card overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-secondary font-medium uppercase">{post.category}</span>
                  <h3 className="font-display text-xl font-semibold mt-2 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full" />
                      <span className="text-sm">{post.author.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground text-sm">
                      <span className="flex items-center gap-1"><ThumbsUp className="h-4 w-4" />{post.likes}</span>
                      <span className="flex items-center gap-1"><MessageCircle className="h-4 w-4" />{post.comments.length}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
