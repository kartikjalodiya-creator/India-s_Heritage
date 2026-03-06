import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThumbsUp, MessageCircle, Send, X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts as initialBlogPosts } from '@/data/heritageData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const { isAuthenticated, user } = useApp();
  const navigate = useNavigate();
  const [posts, setPosts] = useState(initialBlogPosts.map(p => ({ ...p, liked: false })));
  const [openComments, setOpenComments] = useState<string | null>(null);
  const [newComment, setNewComment] = useState('');

  const handleLike = (postId: string) => {
    if (!isAuthenticated) {
      navigate('/auth', { state: { returnTo: '/blog' } });
      return;
    }
    setPosts(prev => prev.map(p =>
      p.id === postId
        ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 }
        : p
    ));
  };

  const handleAddComment = (postId: string) => {
    if (!isAuthenticated) {
      navigate('/auth', { state: { returnTo: '/blog' } });
      return;
    }
    if (!newComment.trim()) return;
    setPosts(prev => prev.map(p =>
      p.id === postId
        ? {
            ...p,
            comments: [...p.comments, {
              id: Date.now().toString(),
              author: user?.name || 'You',
              text: newComment.trim(),
              date: new Date().toISOString().split('T')[0]
            }]
          }
        : p
    ));
    setNewComment('');
  };

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
            {posts.map((post, index) => (
              <motion.article key={post.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="heritage-card overflow-hidden group flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs text-secondary font-medium uppercase">{post.category}</span>
                  <h3 className="font-display text-xl font-semibold mt-2 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="mt-auto pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full" />
                        <span className="text-sm">{post.author.name}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground text-sm">
                        <button
                          onClick={() => handleLike(post.id)}
                          className={`flex items-center gap-1 transition-colors ${post.liked ? 'text-secondary' : 'hover:text-secondary'}`}
                        >
                          <ThumbsUp className={`h-4 w-4 ${post.liked ? 'fill-current' : ''}`} />{post.likes}
                        </button>
                        <button
                          onClick={() => setOpenComments(openComments === post.id ? null : post.id)}
                          className="flex items-center gap-1 hover:text-secondary transition-colors"
                        >
                          <MessageCircle className="h-4 w-4" />{post.comments.length}
                        </button>
                      </div>
                    </div>

                    <AnimatePresence>
                      {openComments === post.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden mt-4"
                        >
                          <div className="max-h-40 overflow-y-auto space-y-2 mb-3">
                            {post.comments.length === 0 && (
                              <p className="text-muted-foreground text-xs">No comments yet. Be the first!</p>
                            )}
                            {post.comments.map(c => (
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
                              placeholder="Write a comment..."
                              className="text-xs h-8"
                              onKeyDown={e => e.key === 'Enter' && handleAddComment(post.id)}
                            />
                            <Button size="sm" className="h-8 px-2" onClick={() => handleAddComment(post.id)}>
                              <Send className="h-3 w-3" />
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
