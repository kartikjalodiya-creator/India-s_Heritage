import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeritageCard from '@/components/HeritageCard';
import VideoModal from '@/components/VideoModal';
import { Button } from '@/components/ui/button';
import { heritageSites, HeritageSite } from '@/data/heritageData';
import { useApp } from '@/contexts/AppContext';

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);
  const { savedTours, toggleSavedTour } = useApp();

  const categories = ['All', 'Mughal Architecture', 'Ancient Ruins', 'Temple Architecture', 'Buddhist Heritage'];

  const filteredSites = heritageSites.filter(site => {
    const matchesCategory = selectedCategory === 'All' || site.category === selectedCategory;
    const matchesSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         site.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handlePlay = (site: HeritageSite) => {
    setSelectedVideo({ url: site.videoUrl, title: site.name });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-gradient-heritage">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-primary-foreground"
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Explore Heritage Sites
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Discover India's magnificent monuments, from ancient temples to Mughal masterpieces
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-card border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search sites..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 'btn-saffron' : ''}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sites Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredSites.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No heritage sites found matching your criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSites.map((site, index) => (
                <motion.div
                  key={site.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <HeritageCard
                    id={site.id}
                    image={site.image}
                    name={site.name}
                    location={site.location}
                    description={site.description}
                    bestTime={site.bestTime}
                    crowdLevel={site.crowdLevel}
                    onPlay={() => handlePlay(site)}
                    variant="tour"
                    isSaved={savedTours.includes(site.id)}
                    onToggleSave={() => toggleSavedTour(site.id)}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />

      {/* Video Modal */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url || ''}
        title={selectedVideo?.title || ''}
      />
    </div>
  );
};

export default Explore;
