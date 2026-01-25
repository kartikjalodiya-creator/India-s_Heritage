import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VideoModal from './VideoModal';
import { heritageSites, HeritageSite } from '@/data/heritageData';

interface VirtualToursProps {
  highlightedSite?: HeritageSite;
}

const VirtualTours = ({ highlightedSite }: VirtualToursProps) => {
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  const handlePlayVideo = (site: HeritageSite) => {
    setSelectedVideo({ url: site.videoUrl, title: site.name });
  };

  return (
    <section id="virtual-tours" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">Immersive Experience</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
            360° Virtual Tours
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience India's magnificent heritage sites from anywhere in the world with our immersive virtual tours
          </p>
          
          {/* 360Cities Reference */}
          <a 
            href="https://www.360cities.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm text-secondary hover:underline"
          >
            Powered by 360°Cities
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {heritageSites.map((site, index) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden shadow-heritage transition-all duration-500 hover:shadow-heritage-lg ${
                highlightedSite?.id === site.id ? 'ring-4 ring-secondary ring-offset-4' : ''
              }`}
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={site.image} 
                  alt={site.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Play Button */}
              <button
                onClick={() => handlePlayVideo(site)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-20 w-20 rounded-full bg-secondary/90 flex items-center justify-center shadow-glow-saffron opacity-80 group-hover:opacity-100 transition-opacity"
                >
                  <Play className="h-8 w-8 text-secondary-foreground ml-1" fill="currentColor" />
                </motion.div>
              </button>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 bg-secondary/20 backdrop-blur-sm text-secondary-foreground text-xs font-medium rounded-full mb-2">
                      {site.category}
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-1">
                      {site.name}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm">{site.location}</p>
                  </div>
                </div>
                
                <p className="text-primary-foreground/80 text-sm mt-3 line-clamp-2 hidden sm:block">
                  {site.description}
                </p>
              </div>

              {/* 360° Badge */}
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-card/90 backdrop-blur-sm rounded-full text-xs font-bold">
                360°
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
          >
            Explore All Virtual Tours
          </Button>
        </motion.div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url || ''}
        title={selectedVideo?.title || ''}
      />
    </section>
  );
};

export default VirtualTours;
