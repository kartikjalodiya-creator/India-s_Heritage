import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { heritageSites, HeritageSite } from '@/data/heritageData';

interface InteractiveMapProps {
  onSiteSelect?: (site: HeritageSite) => void;
}

const InteractiveMap = ({ onSiteSelect }: InteractiveMapProps) => {
  const [selectedSite, setSelectedSite] = useState<HeritageSite | null>(null);
  const [hoveredSite, setHoveredSite] = useState<string | null>(null);

  // Map pin positions (approximate positions on India map)
  const pinPositions: Record<string, { top: string; left: string }> = {
    'taj-mahal': { top: '35%', left: '48%' },
    'hampi': { top: '65%', left: '38%' },
    'konark': { top: '48%', left: '62%' },
    'ajanta': { top: '52%', left: '38%' }
  };

  const handleSiteClick = (site: HeritageSite) => {
    setSelectedSite(site);
    onSiteSelect?.(site);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">Interactive Map</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
            Explore Heritage Sites
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Click on the markers to discover India's magnificent monuments and plan your cultural journey
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Map Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] bg-card rounded-3xl shadow-heritage-lg overflow-hidden"
          >
            {/* Embedded Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7769898.31123456!2d77.1024902!3d20.5937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />

            {/* Custom Pin Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              {heritageSites.map(site => (
                <motion.button
                  key={site.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  style={{
                    position: 'absolute',
                    ...pinPositions[site.id]
                  }}
                  className={`pointer-events-auto p-2 rounded-full transition-all duration-300 ${
                    selectedSite?.id === site.id 
                      ? 'bg-secondary scale-125 shadow-glow-saffron' 
                      : 'bg-primary hover:bg-secondary hover:scale-110'
                  }`}
                  onClick={() => handleSiteClick(site)}
                  onMouseEnter={() => setHoveredSite(site.id)}
                  onMouseLeave={() => setHoveredSite(null)}
                >
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                  
                  {/* Tooltip */}
                  {hoveredSite === site.id && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-card text-foreground rounded-lg shadow-lg whitespace-nowrap text-sm font-medium"
                    >
                      {site.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-card" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Open in Google Maps button */}
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Open in Google Maps
            </a>
          </motion.div>

          {/* Site Info Panel */}
          {selectedSite && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute top-4 right-4 w-80 bg-card rounded-2xl shadow-heritage-lg overflow-hidden z-10"
            >
              <div className="relative">
                <img 
                  src={selectedSite.image} 
                  alt={selectedSite.name} 
                  className="w-full h-40 object-cover"
                />
                <button 
                  onClick={() => setSelectedSite(null)}
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-card/80 hover:bg-card transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              <div className="p-4">
                <h3 className="font-display text-xl font-semibold mb-1">{selectedSite.name}</h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                  <MapPin className="h-4 w-4" />
                  {selectedSite.location}
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {selectedSite.description}
                </p>
                <Button 
                  onClick={() => onSiteSelect?.(selectedSite)}
                  className="w-full btn-saffron"
                >
                  View 360° Tour
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
